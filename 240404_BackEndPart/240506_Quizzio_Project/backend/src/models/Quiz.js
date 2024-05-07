import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    question: [
      { type: mongoose.Types.ObjectId, ref: "Question", required: true },
    ],
  },
  { collection: "quiz", timestamps: false }
);
export const Quiz = mongoose.model("Quiz", quizSchema);
