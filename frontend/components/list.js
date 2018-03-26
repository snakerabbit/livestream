import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
          renderItem={({item}) => <Text key={item.id} style={styles.item}>Title: {item.title} ~{"\n"}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
