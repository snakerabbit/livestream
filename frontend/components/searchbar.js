import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {FormLabel, FormInput} from 'react-native-elements';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text:''
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePress(){
    if(this.state.text.length > 0){
      this.props.fetchStream(this.state.text);

    } else {
      this.props.fetchStreams();
    }

  }

  handleChange(text){
    this.setState({
      text: text
    });
  }


  render(){
    return (
      <View style={styles.container}>
        <FormInput onChangeText={(text) => this.setState({text: text})} placeholder="Search By Username"/>
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
