const Movie = require('../../models/movie')
const User = require('../../models/user')

module.exports = {
    addToMyWatch
}

async function addToMyWatch(req, res){
    console.log('test!!! ')
    const movie = await Movie.getMovies(parseInt(req.params.id), req.body.title)
    console.log(movie)
    res.json(movie)
}