import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    nachname: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "user" }
);
export const User = mongoose.model("User", userSchema);
