const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },

    date: { type: Date, Default: Date.now },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

const myWatchSchema = new Schema({
  tmdBid: {
    type: Number,
  },

  mediaType: {
    type: String,
  },

  comments: [commentSchema],
});

myWatchSchema.statics.getMyWatch = function (mwID, mwMediaType) {
  return this.findOneAndUpdate(
    { tmdBid: mwID },
    { tmdBid: mwID, mediaType: mwMediaType },
    { upsert: true, new: true }
  );
};

// myWatchSchema.CommentSchema.statics.addComment = function () {
//   return this.findOneAndUpdate({ tmdBid: tmdBid });
// };

module.exports = mongoose.model("MyWatch", myWatchSchema);
