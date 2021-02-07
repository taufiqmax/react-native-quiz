import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { List, Appbar, Divider } from 'react-native-paper';
import az900 from './data/az900';
import az104 from './data/az104';

const ExamList = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* //React Native Paper Appbar// */}
      {/* <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => {
            alert('You tapped the button!');
          }}
        />
        <Appbar.Content title="IT Exam Preparation" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header> */}
      <ScrollView>
        <List.Item
          title="Azure AZ-900"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="book-open-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() =>
            navigation.navigate('ExamDetails', {
              title: 'AZ-900',
              questions: az900,
            })
          }
        />
        <Divider />
        <List.Item
          title="Azure AZ-104"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="book-open-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() =>
            navigation.navigate('ExamDetails', {
              title: 'AZ-104',
              questions: az104,
            })
          }
        />
        <Divider />
      </ScrollView>
    </View>
  );
};

export default ExamList;
