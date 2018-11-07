import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components/native';

const DeckView = styled.View`
  background-color: #E8862E;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 150;
  border-radius: 5;
  shadow-color: #000;
  shadow-radius: 6;
  shadow-opacity: .25;
  margin: 10px 0;
`
const Title = styled.Text`
  font-size: 35;
  margin-bottom: 10px;
  color: #FBF9FB;
`

const Subtitle = styled.Text`
  font-size: 17;
  color: #94B9D0;
`

const DeckItem = ({ title, cards, navigation }) => {
return (
  <TouchableOpacity onPress={() => navigation.navigate('Deck', { title, cards })}>
    <DeckView style={{shadowOffset: {height: 10}, width: .95 * Dimensions.get('window').width}}>
      <Title>{title}</Title>
      <Subtitle>{cards} {cards > 1 ? 'cards' : 'card'}</Subtitle>
    </DeckView>
  </TouchableOpacity>
)
}

export default withNavigation(DeckItem);