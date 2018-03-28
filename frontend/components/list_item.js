import React from 'react';
import { StyleSheet, Text, View, FlatList,
        TouchableHighlight, Modal, WebView} from 'react-native';
import { List, ListItem } from 'react-native-elements';


class StreamListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state ={
      modalVisible: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // openModal(){
  //   this.setState({
  //     modaVisible: true
  //   });
  // }

  closeModal(){
    this.setState({
      modalVisible:false
    });
  }


  handleClick(){
    // console.log(this.props.item.title);
    this.setState({
      modalVisible:true
    });
  }

  render(){
    let url=`https://player.twitch.tv/?stream=${this.props.item.id}&channelId=${this.props.item.user_id}&autoplay=false`;
    return(
      <View>
        <ListItem onPress={this.handleClick}
          title={this.props.item.title}
          avatar="https://pbs.twimg.com/profile_images/549090737434812416/CvARcZHS.jpeg">
      </ListItem>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        >
        <TouchableHighlight onPress={this.closeModal}
          style={{marginTop: 50}}>
          <Text>Back to Results</Text>
        </TouchableHighlight>
        <WebView
            style={styles.vid}
            source={{uri: url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            >
          </WebView>

      </Modal>
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
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  vid: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  }
});
export default StreamListItem;
