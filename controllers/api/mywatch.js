const Movie = require("../../models/movie");
const User = require("../../models/user");
const MyWatch = require("../../models/myWatch");

module.exports = {
  addToMyWatch,
};

async function addToMyWatch(req, res) {
  console.log("MY watch test!!! ");
  const myWatch = await MyWatch.getMyWatch(
    parseInt(req.params.id),
    req.body.mwMediaType,
    req.body.mwTitle,
    req.body.mwNameame,
    req.body.mwHaveSeen
  );
  console.log("huhuh   ", req.params.id)
  let user = await User.findById(req.user._id);
  let myWatchItem = await MyWatch.findOne(myWatch._id);
  console.log("Boolean: ", req.body.mwHaveSeen);
  if(req.body.mwHaveSeen){
      console.log("user: ", user._id);
      console.log("viewers: ", myWatchItem.viewers.includes(user._id));
      if (!myWatchItem.viewers.includes(user._id)) {
        console.log("pushers");
        myWatchItem.viewers.push(user._id);
      }

  }

    // if (!(myWatchItem.viewers.find(user._id))){
    //     myWatchItem.viewers.push(user._id)
    // }
    myWatchItem.save();
    console.log("My Watch?  ", myWatchItem);
  
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
