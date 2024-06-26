import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../types/index';

type QuizState = {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
};

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    answerQuestion: (state, action: PayloadAction<number>) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (currentQuestion.correctAnswerIndex === action.payload) {
        state.score += 1;
      }
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
    },
  },
});

export const { setQuestions, answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
