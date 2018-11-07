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
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#DA2850',
    }
  }
})

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <View style={{height: Constants.statusBarHeight, backgroundColor: "#DA2850"}}>
              <StatusBar barStyle='light-content' hidden={false} translucent={true} />
            </View>
              <MainNavigator />
        </View>
      </Provider>
    );
  }
};

export default App;