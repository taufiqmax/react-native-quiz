import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainStackNavigator, PracticeStackNavigator } from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Exam" activeColor="#fff" shifting={true}>
      <Tab.Screen
        name="Exam"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Exam',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeStackNavigator}
        options={{
          tabBarLabel: 'Practice',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="fountain-pen-tip"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
