const User = require("../../models/user");
const MyWatch = require("../../models/myWatch");
const Comment = require("../../models/comment");
const { json } = require("express");
// const { addComment } = require("../../src/utilities/myWatch-api");

module.exports = {
  addToMyWatch,
  deleteFromMyWatch,
  getWatched,
  addComment,
  getComments,
  getMyWatch,
};

async function getMyWatch(req, res) {
  let myWatchSearch = await MyWatch.findOne(req.body)
    .populate({ path: "comments", populate: { path: "author", model: "User" } })
    .exec();  
  res.json(myWatchSearch);
}

async function deleteFromMyWatch(req, res) {
  let user = await User.findById(req.user._id);  
  let myWatchItem = await MyWatch.findOne({ tmdBid: req.body.tmdBid });

  if (user.watched.includes(myWatchItem._id)) {   
    let idx = user.watched.indexOf(myWatchItem._id);
    user.watched.splice(idx, 1);
  }

  if (user.myActors.includes(myWatchItem._id)) {   
    let idx = user.myActors.indexOf(myWatchItem._id);
    user.myActors.splice(idx, 1);
  }

  if (user.notWatched.includes(myWatchItem._id)) {
    let idx = user.notWatched.indexOf(myWatchItem._id);
    user.notWatched.splice(idx, 1);
  }
  user.save();
  res.json(user);
}

async function getComments(req, res) {
  let commentstemp = await MyWatch.findOne({ tmdBid: req.params.id })
    .populate({ path: "comments", populate: { path: "author", model: "User" } })
    .exec();
  res.json(commentstemp);
}

async function addComment(req, res) {  
  const comment = new Comment(req.body);
  comment.save();
  const myWatchForComment = await MyWatch.findOne({ tmdBid: req.params.id }); 
  myWatchForComment.comments.push(comment._id);
  myWatchForComment.save(); 
  res.json(comment);
}

async function getWatched(req, res) {  
  let user = await User.findById(req.user._id)
    .populate({
      path: "watched",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .sort({ tmdBid: 1 })
    .populate({
      path: "notWatched",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .sort({ tmdBid: -1 })
    .populate({
      path: "myActors",
      populate: {
        path: "comments",
        model: "Comment",
        populate: { path: "author", model: "User" },
      },
    })
    .sort({ tmdBid: 1 })
    .exec();
  let getWatched = user;
  
  res.json(getWatched);
}

async function addToMyWatch(req, res) {
  const myWatch = await MyWatch.getMyWatch(
    parseInt(req.params.id),
    req.body.mwName,
    req.body.mwMediaType
  );
  let myWatch3 = myWatch;
  let user = await User.findById(req.user._id);
  let myWatchItem = await MyWatch.findOne(myWatch._id);

  if (req.body.mwMediaType == "movie" || req.body.mwMediaType == "tv") {
    if (req.body.mwHaveSeen) {
      if (!user.watched.includes(myWatchItem._id)) {
        user.watched.push(myWatch._id);
        if (user.notWatched.includes(myWatchItem._id)) {
          let idx = user.notWatched.indexOf(myWatchItem._id);
          user.notWatched.splice(idx, 1);
        }
      }
    } else {      
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
  res.json(myWatch);
}
