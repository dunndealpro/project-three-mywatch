const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: {
        type: "String",
        // required: true
    },
    id: {
        type: "Number",
        // required: true
    },
    haveSeen: {
        type: "Boolean",
        default: false
    },
    
    },
{
        timestamps: true
    });
    

showSchema.statics.getShows = function(showId, showTitle, haveSeen){
    // console.log("yep dirp"),
    return this.findOneAndUpdate(
        {id: showId},
        {id: showId, title: showTitle, haveSeen: haveSeen},
        {upsert: true, new:true},        
    )    
}

// showSchema.methods.getNonSeenshows = async function(){
//     console.log('heyhehey')
// }
    
module.exports=mongoose.model('show', showSchema) 