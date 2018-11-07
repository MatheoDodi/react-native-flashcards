import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { getDecks } from '../utils/helpers';
import { setDecks } from '../actions'
import Deck from '../Components/Deck';

class Home extends Component {
  componentDidMount() {
    getDecks()
      .then(res => {
        this.props.dispatch(setDecks(res));
      });
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Home.js</Text>
        <FlatList
          data={Object.keys(this.props.decks)}
          renderItem={({item}) => <Deck title={item} />}
        />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  decks : state
})

export default connect(mapStateToProps)(Home);