import { choosePreferences } from "./game-prefernces.js";
import { prepareQns } from "./prepare-questions.js";
import { startQuiz } from "./conduct-quiz.js";

export const cli_quiz = async () => {
  console.clear();
  const playerPreferences = await choosePreferences();
  const questionBank = await prepareQns(playerPreferences);
  const score = await startQuiz(questionBank);

  console.log("Your Final score is", score);
  console.log("Thanks for Playing");
  return 0;
};
