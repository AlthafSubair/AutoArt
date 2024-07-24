import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },
    avatar: {
        type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },avatar: {
      type: String,
     
  }
  }
);

const User = mongoose.model("users", userSchema);

export default User;
