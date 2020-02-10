import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CoinCard } from '../components/CoinCard';
import fetchCoinData from '../store/actions/crypto';

export default function MainScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  const openCryptoHandler = crypto => {
    navigation.navigate("Crypto", {
      crypto
    });
  };

  const allCrypto = useSelector(state => state.crypto.data);
  const loading = useSelector(state => state.crypto.isFetching);

  console.log(allCrypto);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={"black"} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={allCrypto}
        keyExtractor={crypto => crypto.id.toString()}
        renderItem={({ item }) => (
          <CoinCard crypto={item} onOpen={openCryptoHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
