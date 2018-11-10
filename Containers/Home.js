import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, FlatList, ImageBackground } from 'react-native';
import { getDecks } from '../utils/helpers';
import { setDecks } from '../actions'
import DeckItem from '../Components/DeckItem';

const gradientsArray = [['#6190E8', '#A7BFE8'], ['#CAC531', '#F3F9A7'], ['#11998e', '#38ef7d'], ['#C5796D', '#DBE6F6'], ['#67B26F', '#4ca2cd'], ['#536976', '#BBD2C5'], ['#dd3e54', '#6be585']];


class Home extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    getDecks()
      .then(res => {
        this.props.dispatch(setDecks(res));
      });
  };

  render() {
    const { decks } = this.props;
    const sortedDecks = Object.keys(decks)
    .sort()

    return (
        <View style={{alignItems: 'center', flex: 1, backgroundColor: '#2D3652'}}>
          <FlatList
            contentContainerStyle={{alignItems: 'center', width: Dimensions.get('window').width}}
            data={sortedDecks}
            renderItem={({ item, index }) => 
              <DeckItem
                title={item}
                cards={decks[item].questions.length} />}
            keyExtractor={(item, index) => item}
          />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  decks : state
})

export default connect(mapStateToProps)(Home);