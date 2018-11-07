import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { Text, View } from 'react-native';
import Home from './Containers/Home';
import styled from 'styled-components/native';

const BackgroundImage = styled.ImageBackground`
  position: absolute;
  z-index: -1;
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
              <Text>Test</Text>
              <Home />
          </BackgroundImage>
        </View>
      </Provider>
    );
  }
};

export default App;