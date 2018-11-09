import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { saveDeckTitleAction } from '../actions';
import { saveDeckTitle } from '../utils/helpers';


class NewDeck extends Component {
  state = {
    title: ''
  }

  inputHandler = (value) => {
    this.setState({ title: value });
  };

  submitHandler = () => {
    const { title } = this.state;
    this.props.dispatch(saveDeckTitleAction(title));
    saveDeckTitle(title);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25}}>Create a new Deck</Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.inputHandler}
          placeholder = "Deck Name"
          placeholderTextColor = "#171F33"
          autoCapitalize = "none"/>
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
     width: 200,
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

export default connect()(NewDeck);