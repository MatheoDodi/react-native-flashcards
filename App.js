import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { Text, View } from 'react-native';
import Home from './Containers/Home';

const store = createStore(reducer);

class App extends React.Component {

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

export default App;