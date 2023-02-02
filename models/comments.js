const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const commentSchema = new Schema(
//   {
//     author: { type: Schema.Types.ObjectId, ref: "User" },

//     date: { type: Date, Default: Date.now },
// content: { type: String },
//   },
//   {
//     timestamps: true,
//   }
// );

// commentSchema.statics.getComments = function (commentID, author){
//     return this.findOneAndUpdate(
//         {}
//     )
// }
