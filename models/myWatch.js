const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myWatchSchema = new Schema({
  tmdBid: {
    type: Number,
  },

  mwName: {
    type: String,
  },

  mediaType: {
    type: String,
  },

  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

myWatchSchema.statics.getMyWatch = function (mwID, mwName, mwMediaType) {
  return this.findOneAndUpdate(
    { tmdBid: mwID },
    { tmdBid: mwID, mwName: mwName, mediaType: mwMediaType },
    { upsert: true, new: true }
  );
};

// myWatchSchema.CommentSchema.statics.addComment = function () {
//   return this.findOneAndUpdate({ tmdBid: tmdBid });
// };

module.exports = mongoose.model("MyWatch", myWatchSchema);
