import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from './searchbar';
import List from './list';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount(){
  }

  renderContent(){
    if(this.props.streams){
      return(
        <List streams={this.props.streams}/>
      );
    } else {
      return(
        <SearchBar fetchStreams={this.props.fetchStreams}/>
      );
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <Text>Twitch Stream Search</Text>
        <View>{this.renderContent()}</View>
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
