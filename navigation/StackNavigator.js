import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ExamList from '../screens/ExamList';
import ExamPracticeList from '../screens/ExamPracticeList';
import ExamDetails from '../screens/ExamDetails';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#1f65ff',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStackNavigator = () => {
  return (
    //use for react native Appbar
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="ExamList"
        component={ExamList}
        options={{ title: 'Exam List' }}
      />
      <Stack.Screen
        name="ExamDetails"
        component={ExamDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

const PracticeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Practicelist"
        component={ExamPracticeList}
        options={{ title: 'Practice List' }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, PracticeStackNavigator };
