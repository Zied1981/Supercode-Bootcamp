import mongoose from "mongoose";
const answerSchema = new mongoose.Schema(
  {
    answerChoices: [{ type: String }],
    feedback: { type: Boolean },
    questionId: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId },
  },
  { collection: "answers", timestamps: false }
);
export const Answer = mongoose.model("Answer", answerSchema);
