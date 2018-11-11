import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import { Title, HomeButton } from '../utils/styles';

const styles = StyleSheet.create({
  gradient : {
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 10,
  borderRadius: 15,
  shadowColor: '#000',
  shadowRadius: 6,
  shadowOpacity: .25,
  marginTop: 10,
  marginBottom: 10,
  shadowOffset: {height: 10}, 
  height: .88 * Dimensions.get('window').height,
  width: .95 * Dimensions.get('window').width
}});

const Results = ({ navigation }) => {
  const { right, total, deck } = navigation.state.params;
  const rightPerc = (( right / total ) * 100).toFixed();

  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: '#2D3652'}}>
      <LinearGradient
        colors={['#4e54c8', '#8f94fb']}
        style={styles.gradient}>
          <Title>{deck}</Title>
          <Title style={{color: '#414345', fontSize: 25, marginTop: 10}}>{rightPerc}% correct answers</Title>
          <Title style={{color: '#414345', fontSize: 25, marginTop: 10}}>{rightPerc >= 50 ? 'Good Job!' : 'Better luck next time!'}</Title>
          <HomeButton
            style={{backgroundColor: '#4e54c8'}}
            onPress={() => navigation.pop(1, { deck })}
            color={'#8f94fb'}>
              <Text style={{textAlign: 'center', color: '#FFF', fontSize: 20}}>Play Again</Text>
          </HomeButton>
          <HomeButton
            onPress={() => navigation.pop(2, { title: deck })}
            color={'#8f94fb'}>
              <Text style={{textAlign: 'center', color: '#8f94fb', fontSize: 20}}>Back to Deck</Text>
          </HomeButton>
      </LinearGradient>
    </View>
  );
};

export default Results;