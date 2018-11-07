import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Home extends Component {

  render() {
    return (
      <View>
        <Text>Home.js</Text>
      </View>
    );
  }
};

export default connect()(Home);