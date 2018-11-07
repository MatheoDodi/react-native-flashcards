import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DeckView = styled.View`
  background-color: #3168A5;
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
  color: #94B9D0;
`

const DeckItem = ({ title, cards, height }) => (
  <TouchableOpacity>
    <DeckView height={height} style={{shadowOffset: {height: 10}, width: .95 * Dimensions.get('window').width}}>
      <Title>{title}</Title>
      <Subtitle>{cards} {cards > 1 ? 'cards' : 'card'}</Subtitle>
    </DeckView>
  </TouchableOpacity>
)

export default DeckItem;