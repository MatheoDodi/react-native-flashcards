import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { addCardToDeckAction } from '../actions';
import { addCardToDeck } from '../utils/helpers';


class NewQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  inputHandler = (value, inputType) => {
    this.setState({ [inputType]: value });
  };

  submitHandler = () => {
    const { question, answer } = this.state;
    const { title } = this.props.navigation.state.params;
    const card = {
      question,
      answer
    };
    this.props.dispatch(addCardToDeckAction(title, card));
    addCardToDeck(title, card);
    this.setState(() => ({ question: '', answer: '' }));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25}}>Add a new Card</Text>
        <TextInput
          style={styles.input}
          value={this.state.question}
          onChangeText={(v) => this.inputHandler(v, 'question')}
          placeholder = "Question"
          placeholderTextColor = "#171F33"
          autoCapitalize = "none" />
        <TextInput
          style={styles.input}
          value={this.state.answer}
          onChangeText={(v) => this.inputHandler(v, 'answer')}
          placeholder = "Answer"
          placeholderTextColor = "#171F33"
          autoCapitalize = "none" />
        <TouchableOpacity onPress={this.submitHandler} style={styles.btn}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  input: {
     textAlign: 'center',
     margin: 25,
     padding: 10,
     width: .9 * Dimensions.get('window').width,
     borderColor: '#171F33',
     borderWidth: 2,
     borderRadius: 5,
     fontSize: 15
  },
  btn: {
    margin: 5,
    backgroundColor: '#171F33',
    width: 150,
    padding: 20,
    borderRadius: 5,
  }});

export default connect()(NewQuestion);