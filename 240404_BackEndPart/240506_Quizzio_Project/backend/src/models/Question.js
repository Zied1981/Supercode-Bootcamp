import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    question: { type: String },
    choices: [{ type: String }],
    correctChoices: [{ type: String }],
  },
  { collection: "question", timestamps: false }
);

export const Question = mongoose.model("Question", questionSchema);
