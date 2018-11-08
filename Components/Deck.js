import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { LinearGradient } from 'expo'
import DeckItem from './DeckItem';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  gradient : {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height: 450,
  borderRadius: 5,
  shadowColor: '#000',
  shadowRadius: 6,
  shadowOpacity: .25,
  marginTop: 10,
  marginBottom: 10,
  shadowOffset: {height: 10}, 
  width: .95 * Dimensions.get('window').width
}});

const Title = styled.Text`
  font-size: 35;
  margin-bottom: 10px;
  color: #FBF9FB;
`

const Subtitle = styled.Text`
  font-size: 17;
  color: #DA2850;
`

const ButtonContainer = styled.View`
  align-items: center;
`

const PrimaryButton = styled.TouchableOpacity`
  margin: 5px;
  background-color: #DA2850;
  width: 150;
  padding: 20px;
  border-radius: 5;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .2;
`

const SecondaryButton = styled.TouchableOpacity`
  margin: 5px;
  background-color: white;
  border: 1px solid #DA2850;
  width: 150;
  padding: 20px;
  border-radius: 5;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .2;
`

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
    }
  }

  render() {
  SafeAreaView.setStatusBarHeight(0);
  const { navigation } = this.props;
  const { title, cards, gradient } = navigation.state.params;
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <LinearGradient colors={gradient} style={styles.gradient}>
        <Title>{ title }</Title>
        <Subtitle>{ cards } { cards > 1 ? 'cards' : 'card' }</Subtitle>
      </LinearGradient>
      <ButtonContainer>
        <PrimaryButton
          onPress={() => navigation.navigate('Quiz', { deck: title, gradient  })}
          style={{width: 175, shadowRadius: 5 ,shadowOffset: {height: 3}}}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>Start Quiz</Text>
        </PrimaryButton>
        <SecondaryButton><Text style={{textAlign: 'center', color: '#DA2850', fontSize: 20}}>Add Card</Text></SecondaryButton>
      </ButtonContainer>
    </View>
    )
  }
};

export default withNavigation(Deck);