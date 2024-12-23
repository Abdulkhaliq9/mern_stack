import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    // phone: {
    //   type: Number,
    //   required: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },

    // question: {
    //   type: String,
    //   required: true,
    // },

    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("user", userSchema);
