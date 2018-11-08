import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const QuizCard = styled.View`
  padding: 5px;
  background-color: #D4BDC2;
  margin: 15px auto;
  width: 300;
  height: 460;
  align-items: center;
  justify-content: center;
  border-radius: 5;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .25;
`

const Title = styled.Text`
  text-align: center;
  font-size: 25;
  margin-bottom: 10px;
  color: #DA2850;
`


class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: navigation.state.params.gradient[0],
      }
    }
  }
  state = {
    questionCounter : 0
  }

  nextQuestion = () => {
    this.setState(prevState => ({
      questionCounter: prevState.questionCounter + 1 
    }) );
  };

  render() {
    const { questions } = this.props;
    const { questionCounter } = this.state;
    const question = questions[questionCounter] ? questions[questionCounter].question : null;
    return (
      <QuizCard style={{shadowOffset: {height: 10}, width: .95 * Dimensions.get('window').width}}>
        {question ? <Title>{question}</Title> : <Title>Done</Title> }
        <TouchableOpacity onPress={this.nextQuestion}><Text>Next</Text></TouchableOpacity>
      </QuizCard>
    );
  };
};

const mapStateToProps = (state, { navigation }) => {
  const { deck } = navigation.state.params;
  const questions = state[deck].questions;

  return {
    deck,
    questions
  };
};

export default connect(mapStateToProps)(Quiz);