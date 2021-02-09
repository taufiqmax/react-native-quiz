import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c9c9c9',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '46%',
    marginTop: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
  },
});

const Button = ({ text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}> {text}</Text>
  </TouchableOpacity>
);

export default Button;
