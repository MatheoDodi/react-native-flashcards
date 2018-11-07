import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { Text, View } from 'react-native';
import { getDecks } from './utils/helpers';
import Home from './Components/Home';

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    getDecks()
      .then(res => console.log(res));
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Test</Text>
          <Home />
        </View>
      </Provider>
    );
  }
};