import React from 'react';
import { View } from 'react-native';
import DeckItem from './DeckItem';

const Deck = () => (
  <View style={{alignItems: 'center'}}>
    <DeckItem height={500} title={'JavaScript'} cards={1} />
  </View>
);

export default Deck;