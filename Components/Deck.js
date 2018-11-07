import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const DeckView = styled.View`
  background-color: #D6E0F8;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 350;
  height: 200;
  border-radius: 10;
  shadow-color: #000;
  shadow-radius: 7;
  shadow-opacity: .25;
  margin: 12.5px;
`
const Title = styled.Text`
  font-size: 35;
  margin-bottom: 10px;
  color: #4C3240;
`

const Subtitle = styled.Text`
  font-size: 17;
  color: #76727C;
`

const Deck = ({ title, cards }) => (
  <DeckView style={{shadowOffset: {height: 7.5, width: 0}}}>
    <Title>{title}</Title>
    <Subtitle>{cards}</Subtitle>
  </DeckView>
)

export default Deck;