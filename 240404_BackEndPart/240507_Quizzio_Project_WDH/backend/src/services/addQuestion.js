import { Question } from "../models/Question.js";
import { Quiz } from "../models/Quiz.js";
//question adden zu einem quiz
//vorher wird abgefragt ob dieses quiz existiert
//falls nein dann error throwen
export async function addQuestion(questionInfo) {
  const quiz = await Quiz.findById(questionInfo.quizId);
  if (!quiz) throw new Error("Could not add question to non existing quiz");

  //auswahlmöglichkeiten von midestens 2 // wenn nicht dann Err thrown
  const minTwoChoices = questionInfo.choices.length >= 2;
  if (!minTwoChoices)
    throw new Error(
      "You need at least 2 choices for a multiple choice question"
    );

  // correct Auswahl von mindestens 1 // wenn nicht dann Err thrown
  const minOneCorrectChoices = questionInfo.correctChoices.length >= 1;
  if (!minOneCorrectChoices)
    throw new Error("At least one choice must be correct");
  // wenn valide Antwort in den auswahl includiert ist da
  const validCorrectChoices = questionInfo.correctChoices.every(
    (correctChoice) => questionInfo.choices.includes(correctChoice)
  );
  if (!validCorrectChoices)
    throw new Error("Correct choices must be subset of choices");

  const question = await Question.create(questionInfo);
  return question;
}

// const validChoices =
// questionInfo.choices.length >= 2 &&
// questionInfo.correctChoices.length >= 1 &&
// questionInfo.correctChoices.some(
//   (correctChoice) => !questionInfo.choices.includes(correctChoice)
// );

// if (!validChoices) throw new Error("Invalid Choices");
