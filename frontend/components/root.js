import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import SearchBar from './searchbar';
import StreamList from './list';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      searched: false
    };
    this.renderContent = this.renderContent.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(bool){
    this.setState({
      searched: bool
    });
  }

  renderContent(){
    if(this.state.searched){
      return(
        <View>

          <Button title="Back To Search" onPress={()=>this.handleToggle(false)}></Button>
          <StreamList streams={this.props.streams}
                      deleteStreams = {this.props.deleteStreams}
                      searched = {this.handleToggle}/>
        </View>
      );
    } else {
      return(
        <SearchBar fetchStreams={this.props.fetchStreams}
                   fetchStream={this.props.fetchStream}
                   searched = {this.handleToggle}/>
      );
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Twitch Stream Search</Text>
        <Text style={{marginBottom: 20}}>Search live streams by Twitch User's username or click the search button to search all current live streams</Text>
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
    marginTop:20,
    marginBottom: 10,
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  }
});
export default Root;
