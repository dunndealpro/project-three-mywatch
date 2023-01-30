const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myWatchSchema = new Schema({
    id: {
        type: "Number",
    },
    media_type: {
        type: "String"
    },
    title:{
        type: "String"
    },
    name:{
        type: "String"
    },
    haveSeen:{
        type: "Boolean"
    }
})

myWatchSchema.statics.getMyWatch = function(mwID, mwMediaType, mwTitle, mwName, mwHaveSeen){
    return this.findOneAndUpdate(
        {id: mwID},
        {id: mwID, media_type: mwMediaType,  title: mwTitle, name: mwName, haveSeen: mwHaveSeen},
        {upsert: true, new:true},   
    )
}

module.exports=mongoose.model('MyWatch', myWatchSchema) 