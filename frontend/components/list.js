import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button, Dimensions} from 'react-native';
import { List, ListItem} from 'react-native-elements';
import StreamListItem from './list_item';

class StreamList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.searched(false);
  }



  render(){
    if(!this.props.streams){
      return (
        <View>
          <Text>No Results Found</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <List style={styles.list}>
            <FlatList
              scrollEnabled={true}
              data={this.props.streams}
              keyExtractor={(item, idx) => idx}
              renderItem={({item}) =>
                <StreamListItem item={item}/>
              }
            />
          </List>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width/3)*2,
    height: Dimensions.get('window').height/2,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
  list:{
    flex: 1,
    alignItems: 'stretch',
    height: 500
  },
  flatlist:{
    height: 500,
    flexGrow: 1
  }
});
export default StreamList;
