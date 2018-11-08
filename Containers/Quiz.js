import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  QuizCard : {
    padding: 5,
    margin: 15,
    width: 300,
    height: 460,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOpacity: .25,
    shadowOffset: {height: 10},
    width: .95 * Dimensions.get('window').width,
    backfaceVisibility: 'hidden'
}});

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
    right: 0,
    wrong: 0,
    questionCounter : 0,
    rotate : new Animated.Value(0),
    animationValue: 0
  };

  componentDidMount() {
    this.state.rotate.addListener(({ value }) => this.setState(() => ({ animationValue: value })))
  }

  frontInterpolate = () => {
    return this.state.rotate.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
  };

  backInterpolate = () => {
    return this.state.rotate.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  };

  nextQuestion = () => {
    this.setState(prevState => ({
      questionCounter: prevState.questionCounter + 1 
    }) );
  };

  flipCard = () => {
    if ( this.state.animationValue >= 90 ) {
      Animated.spring(this.state.rotate, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
      this.nextQuestion();
    } else {
      Animated.spring(this.state.rotate, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const { questions } = this.props;
    const { questionCounter } = this.state;
    let question = null;
    let answer = null;
    if (questions[questionCounter]) {
      question = questions[questionCounter].question
      answer = questions[questionCounter].answer
    }
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate() }
      ]
    };
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate() }
      ]
    }

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View>
          <Animated.View 
            style={[styles.QuizCard, frontAnimatedStyle, {backgroundColor: this.props.gradient[1]}]}>
              {question ? <Title>{question}</Title> : <Title>Done</Title> }
              <Text style={{marginTop: 20}}>
              {questionCounter + 1 > questions.length ? questions.length : questionCounter + 1} / {questions.length}
              </Text>
          </Animated.View>
          <Animated.View
            color={this.props.gradient[1]}
            style={[styles.QuizCard, backAnimatedStyle, {backgroundColor: this.props.gradient[1], position: 'absolute', top: 0, left: 0}]}>
              {answer ? <Title>{answer}</Title> : <Title>Answer Done</Title>}
            <Text style={{marginTop: 20}}>
              {questionCounter + 1 > questions.length ? questions.length : questionCounter + 1} / {questions.length}
            </Text>
          </Animated.View>
        </View>
        <AnswerButton 
          color={this.props.gradient[1]}
          onPress={this.flipCard}>
            <Text style={{textAlign: 'center', color: this.props.gradient[1], fontSize: 20}}>
            { questionCounter + 1 === questions.length && this.state.animationValue >= 90
              ? 'View Results'
              : this.state.animationValue >= 90 ? 'Next Question' : 'View Answer' }
            </Text>
        </AnswerButton>
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