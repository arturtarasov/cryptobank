import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import CryptoContainer from './src/components/CryptoContainer';
import Header from './src/components/Header';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
