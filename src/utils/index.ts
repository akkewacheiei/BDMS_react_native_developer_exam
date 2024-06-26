import { Question } from '../types';

export const getRandomQuestions = (num: number): Question[] => {
  // Replace this with your logic to fetch or generate random questions
  const sampleQuestions: Question[] = [
    {
      questionText: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Rome', 'Berlin'],
      correctAnswerIndex: 0,
    },
    // Add more sample questions here
  ];

  const shuffledQuestions = sampleQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, num);
};
