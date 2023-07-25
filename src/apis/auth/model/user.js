import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "email already exists"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: [true, "username already exists"],
      trim: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password using new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

export const User = new mongoose.model("User", UserSchema);
