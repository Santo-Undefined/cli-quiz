import { number, select } from "@inquirer/prompts";

const CATEGORY_CONFIG = {
  message: "Choose category",
  choices: [
    { value: 9, name: "General Knowledge" },
    { value: 10, name: "Entertainment: Books" },
    { value: 11, name: "Entertainment: Film" },
    { value: 12, name: "Entertainment: Music" },
    { value: 13, name: "Entertainment: Musicals & Theatres" },
    { value: 14, name: "Entertainment: Television" },
    { value: 15, name: "Entertainment: Video Games" },
    { value: 16, name: "Entertainment: Board Games" },
    { value: 31, name: "Entertainment: Japanese Anime & Manga" },
    { value: 32, name: "Entertainment: Cartoon & Animations" },
    { value: 29, name: "Entertainment: Comics" },
    { value: 17, name: "Science & Nature" },
    { value: 18, name: "Science: Computers" },
    { value: 19, name: "Science: Mathematics" },
    { value: 30, name: "Science: Gadgets" },
    { value: 20, name: "Mythology" },
    { value: 21, name: "Sports" },
    { value: 22, name: "Geography" },
    { value: 23, name: "History" },
    { value: 24, name: "Politics" },
    { value: 25, name: "Art" },
    { value: 26, name: "Celebrities" },
    { value: 27, name: "Animals" },
    { value: 28, name: "Vehicles" },
  ],
};

const DIFFICULTY_CONFIG = {
  message: "Choose difficulty",
  choices: [
    { value: "easy", name: "Easy" },
    { value: "medium", name: "Medium" },
    { value: "hard", name: "Hard" },
  ],
};

const NO_OF_QUESTIONS_CONFIG = {
  message: "How many questions you want ?",
  default: 10,
  min: 5,
  max: 30,
  step: 1,
  required: true,
};

export const choosePreferences = async () => {
  const category = await select(CATEGORY_CONFIG);
  const difficulty = await select(DIFFICULTY_CONFIG);
  const noOfQuestions = await number(NO_OF_QUESTIONS_CONFIG);
  return { category, difficulty, noOfQuestions };
};

// choosePreferences();
