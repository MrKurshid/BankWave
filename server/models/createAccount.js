import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    adhaar: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    nomminee: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export const CreateAccount = mongoose.model("CreateAccount", schema);
