import * as actionTypes from '../actions/actionTypes';

export const reducer = (state = { test: 'test'}, action) => {
  switch (action.type) {
    case actionTypes.SET_DECKS :
      return {
        ...state,
        decks
      }
    // case actionTypes.GET_DECK :
    //   return {

    //   }
    case actionTypes.SAVE_DECK_TITLE :
      return {
        ...state,
        [action.title] : {
          title: action.title,
          questions : []
        }
      }
    case actionTypes.ADD_CARD_TO_DECK :
      return {
        ...state,
        [action.title] : {
          ...action.title,
          questions: {
            ...[action.title].questions,
            ...action.card
          }
        }
      }
    default : 
      return state;
  }
};
