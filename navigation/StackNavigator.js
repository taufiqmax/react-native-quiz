import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import ExamList from '../screens/ExamList';
import ExamPracticeList from '../screens/ExamPracticeList';
import ExamDetails from '../screens/ExamDetails';
import PracticeDetails from '../screens/PracticeDetails';
import About from '../screens/About';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#1f65ff',
  },
  headerLeftContainerStyle: {
    margin: 10,
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
        options={({ navigation }) => ({
          title: 'Exam List',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
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
        name="PracticeList"
        component={ExamPracticeList}
        options={({ navigation }) => ({
          title: 'Practice List',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PracticeDetails"
        component={PracticeDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};
const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: 'About Us',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, PracticeStackNavigator, AboutStackNavigator };
