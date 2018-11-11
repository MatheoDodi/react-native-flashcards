import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { setLocalNotification, navTabRoutes, navTabOptions, stackNavRoutes, stackNavOptions } from './utils/helpers';
import { View, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator ,createStackNavigator, createMaterialTopTabNavigator  } from 'react-navigation';
import { Constants } from 'expo';
import Home from './Containers/Home';
import Deck from './Components/Deck';
import Quiz from './Containers/Quiz';
import Results from './Components/Results';
import NewDeck from './Containers/NewDeck';
import NewQuestion from './Containers/NewQuestion';

const store = createStore(reducer);

const TabNav = Platform.OS === 'ios' 
  ? createBottomTabNavigator(navTabRoutes(Home, NewDeck), navTabOptions)
  : createMaterialTopTabNavigator(navTabRoutes(Home, NewDeck), navTabOptions);


const MainNavigator = createStackNavigator(stackNavRoutes(
  TabNav, Deck, Quiz, Results, NewQuestion
  ), stackNavOptions);

class App extends React.Component {
  componentDidMount () {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <View style={{height: Constants.statusBarHeight, backgroundColor: "#171F33"}}>
              <StatusBar barStyle='light-content' hidden={false} translucent={true} />
            </View>
              <MainNavigator />
        </View>
      </Provider>
    );
  }
};

export default App;