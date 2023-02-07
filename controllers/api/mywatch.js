const User = require("../../models/user");
const MyWatch = require("../../models/myWatch");
const Comment = require("../../models/comment");
// const { addComment } = require("../../src/utilities/myWatch-api");

module.exports = {
  addToMyWatch,
  deleteFromMyWatch,
  getWatched,
  addComment,
  getComments,
};

async function deleteFromMyWatch(req, res) {
  console.log("Delete Step 3 - Server Side");
  console.log(req.body.tmdBid)
  let user = await User.findById(req.user._id);
  let myWatchItem = await MyWatch.findOne({tmdBid: req.body.tmdBid});
  console.log(user)
  console.log(myWatchItem)

  

  if (user.watched.indexOf(myWatchItem._id)) {
    let idx = user.watched.indexOf(myWatchItem._id);
    user.watched.splice(idx, 1);
  }

  if(user.notWatched.indexOf(myWatchItem._id)){
  let idx = user.notWatched.indexOf(myWatchItem._id);
  user.notWatched.splice(idx, 1);

  if (user.myActors.indexOf(myWatchItem._id)) {
    let idx = user.myActors.indexOf(myWatchItem._id);
    user.myActors.splice(idx, 1);
  }
  user.save()
  res.json(user)
}

}


async function getComments(req, res) {
  console.log("Getting comments?!?");
  let commentstemp = await MyWatch.findOne({ tmdBid: req.params.id })
    .populate({ path: "comments", populate: { path: "author", model: "User" } })
    .exec();
  console.log(commentstemp);
  res.json(commentstemp);
}

async function addComment(req, res) {
  console.log("Add comment step 3:  ");
  console.log(req.params._id);
  const comment = new Comment(req.body);
  comment.save();

  const myWatchForComment = await MyWatch.findOne({ tmdBid: req.params.id });
  console.log("Comment: ", comment);
  console.log(myWatchForComment);
  myWatchForComment.comments.push(comment._id);
  myWatchForComment.save();
  console.log("&*&*&*", myWatchForComment);
  res.json(comment);
}

async function getWatched(req, res) {
  console.log("get watched: ", req.user._id);
  // let user = await User.findById(req.user._id).populate('watched').populate( 'notWatched').populate( 'myActors').exec()
  let user = await User.findById(req.user._id)
    .populate({
      path: "watched",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .populate({
      path: "notWatched",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .populate({
      path: "myActors",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .exec();

  let getWatched = user;
  let getNotWatched = user.notWatched;
  console.log("Watched,  :", user, "Not Watched,: ", user.notWatched);

  // let getNotWatched = user.notWatched
  // console.log("NOT Watched,  :",user.notWatched)
  // console.log(getNotWatched)

  res.json(getWatched);
}

async function addToMyWatch(req, res) {
  console.log("MY watch test!!! ");
  const myWatch = await MyWatch.getMyWatch(
    parseInt(req.params.id),
    req.body.mwMediaType
  );
  let myWatch3 = myWatch;
  console.log(myWatch3);
  console.log("huhuh   ", req.params.id);
  let user = await User.findById(req.user._id);
  let myWatchItem = await MyWatch.findOne(myWatch._id);
  console.log("Boolean: ", req.body.mwHaveSeen);
  console.log("MyWatchItem: ", myWatchItem);

  if (req.body.mwMediaType == "movie" || req.body.mwMediaType == "tv") {
    if (req.body.mwHaveSeen) {
      console.log("userwatched: ", user.watched.includes(myWatchItem));
      if (!user.watched.includes(myWatchItem._id)) {
        user.watched.push(myWatch._id);
        if (user.notWatched.includes(myWatchItem._id)) {
          let idx = user.notWatched.indexOf(myWatchItem._id);
          user.notWatched.splice(idx, 1);
        }
      }
    } else {
      console.log("userNOTwatched: ", user._id);
      if (!user.notWatched.includes(myWatchItem._id)) {
        user.notWatched.push(myWatch._id);
        if (user.watched.includes(myWatchItem._id)) {
          let idx = user.watched.indexOf(myWatchItem._id);
          user.watched.splice(idx, 1);
        }
      }
    }
  } else if (req.body.mwMediaType == "person") {
    if (!user.myActors.includes(myWatchItem._id)) {
      user.myActors.push(myWatch._id);
    }
  }

  user.save();
  myWatch.save();
  myWatchItem.save();
  console.log("My Watch?  ", myWatch);
  console.log("User Info: ", user);
  //   console.log("User Info: ", user);
  res.json(myWatch);
}
