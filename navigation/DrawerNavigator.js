import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { DrawerContent } from '../components/DrawerContent';
import {
  MainStackNanigator,
  PracticeStackNavigator,
  AboutStackNavigator,
} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* <Drawer.Screen name="Practice" component={PracticeStackNavigator} /> */}
      <Drawer.Screen name="About" component={AboutStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
