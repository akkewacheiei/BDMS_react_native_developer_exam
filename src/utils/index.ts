import { Question } from '../types';

export const getRandomQuestions = (num: number): Question[] => {
  const sampleQuestions: Question[] = [
    {
      questionText: 'คำตอบของ 1 + 1 คือ??',
      answers: ['1', '2', '3', '4'],
      correctAnswerIndex: 1,
    },{
      questionText: 'คำตอบของ 1 + 2 คือ??',
      answers: ['1', '2', '3', '4'],
      correctAnswerIndex: 2,
    },{
      questionText: 'คำตอบของ 1 + 3 คือ??',
      answers: ['1', '2', '3', '4'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 2 + 2 คือ??',
      answers: ['1', '2', '3', '4'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 2 + 3 คือ??',
      answers: ['2', '3', '4', '5'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 10 + 10 คือ??',
      answers: ['1', '20', '3', '4'],
      correctAnswerIndex: 1,
    },{
      questionText: 'คำตอบของ 10 + 20 คือ??',
      answers: ['1', '2', '30', '4'],
      correctAnswerIndex: 2,
    },{
      questionText: 'คำตอบของ 10 + 30 คือ??',
      answers: ['1', '2', '3', '40'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 20 + 20 คือ??',
      answers: ['1', '2', '3', '40'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 20 + 30 คือ??',
      answers: ['2', '3', '4', '50'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 100 + 100 คือ??',
      answers: ['1', '200', '3', '4'],
      correctAnswerIndex: 1,
    },{
      questionText: 'คำตอบของ 100 + 200 คือ??',
      answers: ['1', '2', '300', '4'],
      correctAnswerIndex: 2,
    },{
      questionText: 'คำตอบของ 100 + 300 คือ??',
      answers: ['1', '2', '3', '400'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 200 + 200 คือ??',
      answers: ['1', '2', '3', '400'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 200 + 300 คือ??',
      answers: ['2', '3', '4', '500'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 1000 + 1000 คือ??',
      answers: ['1', '2000', '3', '4'],
      correctAnswerIndex: 1,
    },{
      questionText: 'คำตอบของ 1000 + 2000 คือ??',
      answers: ['1', '2', '3000', '4'],
      correctAnswerIndex: 2,
    },{
      questionText: 'คำตอบของ 1000 + 3000 คือ??',
      answers: ['1', '2', '3', '4000'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 2000 + 2000 คือ??',
      answers: ['1', '2', '3', '4000'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'คำตอบของ 2000 + 3000 คือ??',
      answers: ['2', '3', '4', '5000'],
      correctAnswerIndex: 3,
    },

    // Add more sample questions here
  ];

  // Shuffle questions
  const shuffledQuestions = sampleQuestions.sort(() => Math.random() - 0.5);

  // Shuffle answers for each question without changing correctAnswerIndex
  const randomizedQuestions = shuffledQuestions.map(question => {
    // Create a new array of answers with the same order as the original answers
    const originalAnswers = question.answers.slice();
    // Shuffle the answers
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    // Find the index of the correct answer in the shuffled answers
    const correctAnswerIndex = shuffledAnswers.findIndex(answer => answer === originalAnswers[question.correctAnswerIndex]);
    return {
      ...question,
      answers: shuffledAnswers,
      correctAnswerIndex: correctAnswerIndex,
    };
  });

  return randomizedQuestions.slice(0, num);
};
