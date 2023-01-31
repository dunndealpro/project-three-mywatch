const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myWatchSchema = new Schema({
    tmdbid: {
        type: "Number",
    },
    
})

myWatchSchema.statics.getMyWatch = function(mwID){
    return this.findOneAndUpdate(
        {tmdbid: mwID},
        {tmdbid: mwID},
        {upsert: true, new:true},   
    )
}

module.exports=mongoose.model('MyWatch', myWatchSchema) 