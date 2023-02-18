const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    myWatch: { type: Schema.Types.ObjectId, ref: "MyWatch" },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
