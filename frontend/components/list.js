import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import ListItem from './list_item';

class List extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return (
      <View style={styles.container}>
        <Text>List</Text>
        <FlatList
          scrollEnabled={true}
          data={this.props.streams}
          renderItem={({item}) =>
            <ListItem item={item}/>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  }
});
export default List;
