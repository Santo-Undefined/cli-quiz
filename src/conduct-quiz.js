import { input, select } from "@inquirer/prompts";
import process from "node:process";
import chalk from "chalk";

const makeChoiceConfig = (options) => {
  const config = [];
  for (const option of options) {
    config.push({ name: option, value: option });
  }

  return config;
};

const makeQuestionConfig = (question) => {
  const config = {
    message: question.question,
    choices: makeChoiceConfig(question.options),
  };
  return config;
};

export const startQuiz = async (questionBank) => {
  let score = 0;
  console.clear();

  for (const question of questionBank) {
    console.log(`Score: ${chalk.green(score)} \n`);
    const userAnswer = await select(makeQuestionConfig(question));
    if (userAnswer === question.answer) {
      score++;
      console.log(`\n${chalk.green("Correct Answer")} (Score++)\n`);
    } else {
      console.log(chalk.red("\n WRONG ANSWER"));
      console.log(`Correct answer is ${chalk.green(question.answer)}\n`);
    }

    prompt("Press enter to go to next question");
    console.clear();
  }
  return score;
};
