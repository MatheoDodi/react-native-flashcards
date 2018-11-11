import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo';
import { Title, Subtitle } from '../utils/styles';

const styles = StyleSheet.create({
  gradient : {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height: 150,
  borderRadius: 5,
  shadowColor: '#000',
  shadowRadius: 6,
  shadowOpacity: .25,
  marginTop: 10,
  marginBottom: 10,
  shadowOffset: {height: 10}, 
  width: .95 * Dimensions.get('window').width
}});

const DeckItem = ({ title, cards, navigation, gradient }) => {
return (
  <TouchableOpacity onPress={() => navigation.navigate('Deck', { title, cards, gradient })}>
    <LinearGradient 
      style={styles.gradient}
      colors={['#4e54c8', '#8f94fb']}>
        <Title>{title}</Title>
        <Subtitle>{cards} {cards > 1 ? 'cards' : 'card'}</Subtitle>
    </LinearGradient>
  </TouchableOpacity>
);
};

export default withNavigation(DeckItem);