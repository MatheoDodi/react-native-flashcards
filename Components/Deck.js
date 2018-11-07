import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import DeckItem from './DeckItem';
import styled from 'styled-components/native';

const DeckView = styled.View`
  height: 450;
  background-color: #E8862E;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .4;
  margin: 15px 0;
`
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
      title: navigation.state.params.title
    }
  }

  render() {
  SafeAreaView.setStatusBarHeight(0);
  const { navigation } = this.props;
  const { title, cards } = navigation.state.params;
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <DeckView style={{shadowOffset: {height: 10}, width: .95 * Dimensions.get('window').width}}>
        <Title>{ title }</Title>
        <Subtitle>{ cards } { cards > 1 ? 'cards' : 'card' }</Subtitle>
      </DeckView>
      <ButtonContainer>
        <PrimaryButton
          onPress={() => navigation.navigate('Quiz', { deck: title })}
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