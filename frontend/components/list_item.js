import React from 'react';
import { StyleSheet, Text, View, FlatList,
        TouchableHighlight, Modal, WebView } from 'react-native';


class ListItem extends React.Component {
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
    return (
      <View>
        <TouchableHighlight onPress={this.handleClick}>
          <Text key={this.props.item.id}
                style={styles.item}>
                Title: {this.props.item.title} ~{"\n"}
          </Text>
      </TouchableHighlight>
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
export default ListItem;
