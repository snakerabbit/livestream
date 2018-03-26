import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from './searchbar';
import List from './list';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state={
      streams:null
    };
  }

  componentDidMount(){
  }


  render(){
    return (
      <View style={styles.container}>
        <Text>Root</Text>
        <SearchBar fetchStreams={this.props.fetchStreams}/>
        <List streams={this.props.streams}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  }
});
export default Root;
