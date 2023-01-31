const Movie = require("../../models/movie");
const User = require("../../models/user");
const MyWatch = require("../../models/myWatch");

module.exports = {
  addToMyWatch,
};

async function addToMyWatch(req, res) {
  console.log("MY watch test!!! ");
  const myWatch = await MyWatch.getMyWatch(parseInt(req.params.id));
  console.log("huhuh   ", req.params.id);
  let user = await User.findById(req.user._id);
  let myWatchItem = await MyWatch.findOne(myWatch._id);
  console.log("Boolean: ", req.body.mwHaveSeen);
  console.log("MyWatchItem: ", myWatchItem);

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
      if(user.watched.includes(myWatchItem._id)){
        let idx = user.watched.indexOf(myWatchItem._id);
        user.watched.splice(idx, 1);
      }
    }
  }

  user.save();
  myWatchItem.save();
  console.log("My Watch?  ", myWatchItem);
  console.log("User Info: ", user);
  res.json(myWatch);
}

async function addToMyMovies(req, res) {
  console.log("Movies test!!! ");
  const movie = await Movie.getMovies(
    parseInt(req.params.id),
    req.body.title,
    req.body.haveSeen
  );
  console.log(movie);
  res.json(movie);
}

async function addToMyShows(req, res) {
  console.log("Movies test!!! ");
  const movie = await Show.getMovies(
    parseInt(req.params.id),
    req.body.title,
    req.body.haveSeen
  );
  console.log(movie);
  res.json(movie);
}
