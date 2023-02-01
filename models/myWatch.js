const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myWatchSchema = new Schema({
    tmdBid: {
        type: Number,
    },
    
    mediaType: {
        type: String,        
    }
})

myWatchSchema.statics.getMyWatch = function(mwID, mwMediaType){
    return this.findOneAndUpdate(
        {tmdBid: mwID},
        {tmdBid: mwID, mediaType: mwMediaType},
        {upsert: true, new:true},   
    )
}

module.exports=mongoose.model('MyWatch', myWatchSchema) 