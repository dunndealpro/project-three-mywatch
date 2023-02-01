const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },

    watched: [{ type: Schema.Types.ObjectId, ref: "MyWatch" }],

    notWatched: [{ type: Schema.Types.ObjectId, ref: "notWatched" }],

    myActors: [{type: Schema.Types.ObjectId, ref: "myActors"}]

    // myWatch:[{type: Schema.Types.ObjectId, ref: 'myWatchId'}],

    // myMovies: [{type: Schema.Types.ObjectId, ref: 'movieId'}],
    // myShows: [{type: Schema.Types.ObjectId, ref: 'showId'}],
    // myActors: [{type: Schema.Types.ObjectId, ref: 'actorId'}],
  },
  {
    timestamps: true,

    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model("User", userSchema);
