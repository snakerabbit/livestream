import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import RootContainer from './components/root_container';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
        <RootContainer/>
      </Provider>

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
});
