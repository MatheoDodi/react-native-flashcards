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
    this.props.navigation.navigate('Deck', { title });
    this.setState(() => ({ title: '' }));
 };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>Create a new Deck</Text>
        {!this.state.title && <Text style={{color: 'gray'}}>Required</Text>}
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.inputHandler}
          placeholder = 'Deck Name'
          placeholderTextColor = 'gray'
          autoCapitalize = 'none'/>
        <TouchableOpacity disabled={!this.state.title} onPress={this.submitHandler} style={styles.btn}>
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
     marginBottom: 25,
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