import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';
// import TabNavigator from './navigation/TabNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
