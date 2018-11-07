import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, FlatList } from 'react-native';
import { getDecks } from '../utils/helpers';
import { setDecks } from '../actions'
import DeckItem from '../Components/DeckItem';



class Home extends Component {
  componentDidMount() {
    getDecks()
      .then(res => {
        this.props.dispatch(setDecks(res));
      });
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <FlatList
          contentContainerStyle={{alignItems: 'center', width: Dimensions.get('window').width}}
          data={Object.keys(decks)}
          renderItem={({ item }) => 
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