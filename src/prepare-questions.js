import { arrayShuffle } from "array-shuffle";

const craftURL = ({ category, difficulty, noOfQuestions }) =>
  `https://opentdb.com/api.php?amount=${noOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

const mixOptionsAndAnswer = (qns) => {
  qns.incorrect_answers.push(qns.correct_answer);
  return arrayShuffle(qns.incorrect_answers);
};

const formatQuestions = (data) => {
  const formattedQns = [];
  for (const qns of data.results) {
    formattedQns.push(
      {
        question: qns.question,
        answer: qns.correct_answer,
        options: mixOptionsAndAnswer(qns),
      },
    );
  }
  return formattedQns;
};

const fetchQuestions = async (prefernces) => {
  const url = craftURL(prefernces);
  return await fetch(url)
    .then((content) => {
      if (content.ok) return content.json();
    });
};

export const prepareQns = async (prefernces) => {
  const questionBank = await fetchQuestions(prefernces)
    .then(formatQuestions);
  return questionBank;
};
