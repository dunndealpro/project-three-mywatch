const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myWatchSchema = new Schema({
  tmdBid: {
    type: Number,
  },

  mwName: {
    type: String, lowercase: true
  },

  mediaType: {
    type: String,
  },

  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
},
{
  timestamps: true,
});

myWatchSchema.statics.getMyWatch = function (mwID, mwName, mwMediaType) {
  return this.findOneAndUpdate(
    { tmdBid: mwID },
    { tmdBid: mwID, mwName: mwName, mediaType: mwMediaType },
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model("MyWatch", myWatchSchema);
