import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import Alert from '../components/Alert';

// import TEMP_QUESTIONS from './data/az900';

class PracticeDetails extends React.Component {
  state = {
    correctCount: 0,
    // totalCount: TEMP_QUESTIONS.length,
    totalCount: this.props.route.params.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 500);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      let nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        // nextIndex = 0;
        return this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    // const question = TEMP_QUESTIONS[this.state.activeQuestionIndex];
    const questions = this.props.route.params.questions;
    const question = questions[this.state.activeQuestionIndex];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            {question.answers.map((answer, i) => (
              <Button
                key={i}
                text={answer.text}
                onPress={() => this.answer(answer.correct)}
              />
            ))}
          </View>
          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default PracticeDetails;
