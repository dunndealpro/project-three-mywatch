const Movie = require('../../models/movie')
const User = require('../../models/user')
const MyWatch = require('../../models/myWatch')

module.exports = {
    addToMyWatch
}

async function addToMyWatch(req, res){
    console.log('MY watch test!!! ')
    const myWatch = await MyWatch.getMyWatch(parseInt(req.params.id), req.body.mwMediaType, req.body.mwTitle, req.body.mwNameame, req.body.mwHaveSeen)
    console.log(myWatch)
    res.json(myWatch)
}

async function addToMyMovies(req, res){
    console.log('Movies test!!! ')
    const movie = await Movie.getMovies(parseInt(req.params.id), req.body.title, req.body.haveSeen)
    console.log(movie)
    res.json(movie)
}

async function addToMyShows(req, res){
    console.log('Movies test!!! ')
    const movie = await Show.getMovies(parseInt(req.params.id), req.body.title, req.body.haveSeen)
    console.log(movie)
    res.json(movie)
}