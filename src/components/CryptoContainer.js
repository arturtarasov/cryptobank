import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import fetchCoinData from '../store/actions/crypto';

export default function CryptoContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  const allCrypto = useSelector(state => state.crypto.data);
  console.log(allCrypto);

  return (
    <View>
      <Text>Container</Text>
    </View>
  );
}
