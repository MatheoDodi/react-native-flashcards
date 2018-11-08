import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { View, StatusBar } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import { Constants } from 'expo';
import Home from './Containers/Home';
import Deck from './Components/Deck';
import Quiz from './Containers/Quiz';

const store = createStore(reducer);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz
  }
}, {
  navigationOptions: {
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: "#E0EAFC"
    }
  }
})

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <View style={{height: Constants.statusBarHeight, backgroundColor: "#E0EAFC"}}>
              <StatusBar barStyle='dark-content' hidden={false} translucent={true} />
            </View>
              <MainNavigator />
        </View>
      </Provider>
    );
  }
};

export default App;