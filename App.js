import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { View, StatusBar } from 'react-native';
import { createBottomTabNavigator ,createStackNavigator  } from 'react-navigation';
import { Constants } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Containers/Home';
import Deck from './Components/Deck';
import Quiz from './Containers/Quiz';
import Results from './Components/Results';
import NewDeck from './Containers/NewDeck';
import { getDecks } from './utils/helpers';

const store = createStore(reducer);

const Drawer = createBottomTabNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
              name="library-books"
              color={tintColor}
              size={24}
          />
      )
  }
},
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
              name="plus-box"
              color={tintColor}
              size={24}
          />
      )
  }
}}, {
	tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: 'lightgray',
		style: {
			backgroundColor: 'orange',
			borderTopWidth: 1,
			borderTopColor: 'white'
		},
	}
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz
  },
  Results: {
    screen: Results,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions: {
    headerTintColor: '#000000',
    headerStyle: {
      backgroundColor: "#E0EAFC"
    }
  }
});

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