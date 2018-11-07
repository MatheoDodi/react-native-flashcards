import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import Home from './Containers/Home';
import Deck from './Components/Deck';
import styled from 'styled-components/native';

const BackgroundImage = styled.ImageBackground`
  position: absolute;
  height: 100%;
  width: 100%;
`

const store = createStore(reducer);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <BackgroundImage 
            source={require('./assets/memphis-colorful.png')}
            resizeMode='repeat'>
            <View style={{height: Constants.statusBarHeight, backgroundColor: "#DA2850"}}>
              <StatusBar barStyle='light-content' hidden={false} translucent={true} />
            </View>
              <Deck />
          </BackgroundImage>
        </View>
      </Provider>
    );
  }
};

export default App;