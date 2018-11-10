import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { saveDeckTitleAction } from '../actions';
import { saveDeckTitle } from '../utils/helpers';

const gradientsArray = [['#6190E8', '#A7BFE8'], ['#CAC531', '#F3F9A7'], ['#11998e', '#38ef7d'], ['#C5796D', '#DBE6F6'], ['#67B26F', '#4ca2cd'], ['#536976', '#BBD2C5'], ['#dd3e54', '#6be585']];

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
    // setTimeout(() => {
    this.props.navigation.navigate('Deck', { title });
    // }, 0)
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

const mapStateToProps = state => ({
  decks: state
})

export default connect(mapStateToProps)(NewDeck);