import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  List,
  Appbar,
  Subheading,
} from 'react-native-paper';

const ExamDetails = ({ route }) => {
  const { questions } = route.params;
  return (
    <ScrollView style={styles.scrollview}>
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

      {questions.map((l, i) => (
        <Card key={i} style={styles.card}>
          <Card.Content>
            <Paragraph style={styles.subheading}>
              Q.{i + 1}. {l.question}
            </Paragraph>
            <Divider />
            {l.answers.map((answer, j) => (
              <Paragraph key={j}>
                {j + 1}. {answer.text}
              </Paragraph>
            ))}
          </Card.Content>

          <List.Accordion title="Reveal Solutions" style={styles.reveal}>
            <List.Item title={l.correct} style={styles.listitem} />
          </List.Accordion>
        </Card>
      ))}
    </ScrollView>
  );
};

export default ExamDetails;

const styles = StyleSheet.create({
  subheading: {
    marginBottom: 10,
  },
  card: {
    margin: 10,
    flex: 1,
    backgroundColor: '#d8d8d8',
  },
  scrollview: {
    flex: 1,
  },
  reveal: {
    backgroundColor: '#c9c9c9',
    borderRadius: 5,
  },
  listitem: {
    backgroundColor: '#c9c9c9',
    borderRadius: 5,
  },
});
