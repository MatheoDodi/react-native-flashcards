import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

const QuizCard = styled.View`
  padding: 5px;
  background-color: ${props => props.color};
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

const AnswerButton = styled.TouchableOpacity`
  margin: 5px;
  background-color: #414345;
  border: 1px solid ${props => props.color};
  width: 150;
  padding: 20px;
  border-radius: 5;
  shadow-color: ${props => props.color};
  shadow-radius: 10;
  shadow-opacity: .95;
`

const Title = styled.Text`
  text-align: center;
  font-size: 25;
  margin-bottom: 10px;
  color: #414345;
`


class Quiz extends Component {
  state = {
    questionCounter : 0,
    flipAnimationValue : new Animated.Value(0)
  }

  nextQuestion = () => {
    this.setState(prevState => ({
      questionCounter: prevState.questionCounter + 1 
    }) );
  };

  render() {
    const { questions, gradient } = this.props;
    console.log(gradient);
    const { questionCounter } = this.state;
    const question = questions[questionCounter] ? questions[questionCounter].question : null;

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <QuizCard color={this.props.gradient[1]} style={{shadowOffset: {height: 10}, width: .95 * Dimensions.get('window').width}}>
          {question ? <Title>{question}</Title> : <Title>Done</Title> }
        </QuizCard>
        <AnswerButton color={this.props.gradient[1]}><Text style={{textAlign: 'center', color: this.props.gradient[1], fontSize: 20}}>View Answer</Text></AnswerButton>
      </View>
    );
  };
};

const mapStateToProps = (state, { navigation }) => {
  const { deck, gradient } = navigation.state.params;
  const questions = state[deck].questions;

  return {
    deck,
    gradient,
    questions
  };
};

export default connect(mapStateToProps)(Quiz);