import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import StreamListItem from './list_item';

class StreamList extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    console.log('streams', this.props.streams);
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

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
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
