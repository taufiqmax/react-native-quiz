import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View>
      <Text>About us</Text>
      <Text>Developer: Taufiq</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
