import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true, trim: true },
    isEmailVerified: { type: Boolean, default: false },

    sixDigitCode: {
      type: String,
      required: true,
    },
  },
  { collection: "user", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
