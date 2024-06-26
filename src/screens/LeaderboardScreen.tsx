import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../redux/store';
import { resetQuiz } from '../redux/quizSlice';
import { RootStackParamList } from '../navigation/StackNavigator';

type LeaderboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Leaderboard'
>;

type Props = {
  navigation: LeaderboardScreenNavigationProp;
};

const LeaderboardScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.quiz.score);

  return (
    <View>
      <Text>Leaderboard</Text>
      <Text>Your Score: {score}</Text>
      <Button
        title="Restart Quiz"
        onPress={() => {
          dispatch(resetQuiz());
          navigation.navigate('Quiz');
        }}
      />
    </View>
  );
};

export default LeaderboardScreen;
