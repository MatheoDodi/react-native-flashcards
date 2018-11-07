import * as actionTypes from './actionTypes';

export const setDecks = (decks) => ({
  type: actionTypes.SET_DECKS,
  decks
});

export const getDeckAction = (deck) => ({
  type: actionTypes.GET_DECK,
  deck
});

export const saveDeckTitleAction = (title) => ({
  type: actionTypes.SAVE_DECK_TITLE,
  title
});

export const addCardToDeckAction = (title, card) => ({
  type: actionTypes.ADD_CARD_TO_DECK,
  title,
  card
})