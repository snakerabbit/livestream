import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.fetchStreams();
  }


  render(){
    return (
      <View style={styles.container}>
        <Button title="Search" onPress={this.handlePress}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default SearchBar;
