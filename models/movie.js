const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    id: {
        type: Number,
        // required: true
    },
    
    
    },
{
        timestamps: true
    });
    

movieSchema.statics.getMovies = function(movieId, movieTitle, check){
    // console.log("yep dirp"),
    return this.findOneAndUpdate(
        {id: movieId},
        {id: movieId, title: movieTitle},
        {upsert: true, new:true},        
    )    
}

// movieSchema.methods.getNonSeenMovies = async function(){
//     console.log('heyhehey')
// }
    
module.exports=mongoose.model('Movie', movieSchema) 