import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../redux/store';
import { setQuestions, answerQuestion, resetQuiz } from '../redux/quizSlice';
import { Question } from '../types';
import { getRandomQuestions } from '../utils';
import { RootStackParamList } from '../navigation/StackNavigator';

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: QuizScreenNavigationProp;
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score } = useSelector((state: RootState) => state.quiz);

  useEffect(() => {
    const questions: Question[] = getRandomQuestions(20); // Replace with your random question logic
    dispatch(setQuestions(questions));
  }, [dispatch]);

  if (currentQuestionIndex >= questions.length) {
    navigation.navigate('Leaderboard');
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View>
      <Text>{currentQuestion.questionText}</Text>
      {currentQuestion.answers.map((answer, index) => (
        <Button
          key={index}
          title={answer}
          onPress={() => dispatch(answerQuestion(index))}
        />
      ))}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;
