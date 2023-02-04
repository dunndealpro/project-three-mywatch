const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },

    // userName: {
    //   type: string
    // },

    myWatch: { type: Schema.Types.ObjectId, ref: "MyWatch" },
    
content: { type: String },
  },
  {
    timestamps: true,
  }
);

// commentSchema.statics.getComment = function (commentID, author){
//     return this.findOneAndUpdate(
//         {}
//     )
// }

module.exports = mongoose.model("Comment", commentSchema);
