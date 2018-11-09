import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import styled from 'styled-components';
import Home from '../Containers/Home';

const Title = styled.Text`
  font-size: 35;
  margin-bottom: 10px;
  color: #FBF9FB;
`

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

const HomeButton = styled.TouchableOpacity`
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

const Results = ({ navigation }) => {
  const { right, total, deck, gradient } = navigation.state.params;
  console.log(right, total);
  const rightPerc = ( right / total ) * 100;

  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <LinearGradient
        colors={gradient}
        style={styles.gradient}>
          <Title>{deck}</Title>
          <Title style={{color: '#414345', fontSize: 25, marginTop: 10}}>{rightPerc}% correct answers</Title>
          <Title style={{color: '#414345', fontSize: 25, marginTop: 10}}>{rightPerc >= 50 ? 'Good Job!' : 'Better luck next time!'}</Title>
          <HomeButton
            onPress={() => navigation.popToTop()}
            color={gradient[1]}>
              <Text style={{textAlign: 'center', color: gradient[1], fontSize: 20}}>Home</Text>
          </HomeButton>
      </LinearGradient>
    </View>
  );
};

export default Results;