import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from './searchbar';
import StreamList from './list';

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
        <StreamList streams={this.props.streams}/>
      );
    } else {
      return(
        <SearchBar fetchStreams={this.props.fetchStreams}
                   fetchStream={this.props.fetchStream}/>
      );
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Twitch Stream Search</Text>
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
  text:{
    padding:50,
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  }
});
export default Root;
