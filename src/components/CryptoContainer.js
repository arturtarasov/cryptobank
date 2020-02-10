import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import fetchCoinData from '../store/actions/crypto';
import { CoinCard } from './CoinCard';

export default function CryptoContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

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
        renderItem={({ item }) => <CoinCard crypto={item} />}
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
