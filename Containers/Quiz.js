import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
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
    }));
  };

  rightAnswer = () => {
    this.setState(prevState => ({
      right: prevState.right + 1
    }));
  };

  flipCard = () => {
    if ( this.state.questionCounter + 1 === this.props.questions.length && this.state.animationValue >= 90 ) {
      this.props.navigation.push('Results', {
        right: this.state.right,
        total: this.props.questions.length,
        deck: this.props.deck,
      });

      // clearing and setting Notifications

      clearLocalNotification()
        .then(setLocalNotification);
      
      Animated.spring(this.state.rotate, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
      return this.setState(() => ({
        right: 0,
        questionCounter : 0,
        animationValue: 0
      }))
    };
    if ( this.state.animationValue >= 90 ) {
      Animated.spring(this.state.rotate, {
        toValue: 0,
        friction: 8,
        tension: 5
      }).start();
      setTimeout(this.nextQuestion, 180);
    } else {
      Animated.spring(this.state.rotate, {
        toValue: 180,
        friction: 8,
        tension: 5
      }).start();
    }
  }

  render() {
    const { questions } = this.props;
    console.log(questions);
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
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#2D3652'}}>
        <View>
          <Animated.View 
            style={[styles.QuizCard, frontAnimatedStyle, {backgroundColor: '#8f94fb'}]}>
              <Title>{question}</Title>
              <Text style={{marginTop: 20}}>
              {questionCounter + 1 > questions.length ? questions.length : questionCounter + 1} / {questions.length}
              </Text>
          </Animated.View>
          <Animated.View
            color={'#8f94fb'}
            style={[styles.QuizCard, backAnimatedStyle, {backgroundColor: '#8f94fb', position: 'absolute', top: 0, left: 0}]}>
              <Title>{answer}</Title>
            <Text style={{marginTop: 20}}>
              {questionCounter + 1 > questions.length ? questions.length : questionCounter + 1} / {questions.length}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity onPress={this.rightAnswer} style={{flex: 1, padding: 20, backgroundColor: 'green', margin: 10, borderRadius: 5}}><Text style={{color: 'white', textAlign: 'center'}}>Correct</Text></TouchableOpacity>
              <TouchableOpacity onPress={this.wrongAnswer} style={{flex: 1, padding: 20, backgroundColor: '#DA2850', margin: 10, borderRadius: 5}}><Text style={{color: 'white', textAlign: 'center'}}>Incorrect</Text></TouchableOpacity>
            </View>
          </Animated.View>
        </View>
        <AnswerButton 
          color={'#8f94fb'}
          onPress={this.flipCard}>
            <Text style={{textAlign: 'center', color: '#8f94fb', fontSize: 20}}>
            { questionCounter + 1 === questions.length && this.state.animationValue >= 90
              ? 'View Results'
                : this.state.animationValue >= 90 
                ? 'Next Question' : 'View Answer' }
            </Text>
        </AnswerButton>
      </View>
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