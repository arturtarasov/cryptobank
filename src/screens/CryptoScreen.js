import React, { useEffect, useState } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';

import { images } from '../store/types';

export const CryptoScreen = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [spinAnim] = useState(new Animated.Value(0));

  const crypto = navigation.getParam("crypto");
  if (!crypto) {
    return null;
  }
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          Доступный запас:{" "}
          <Text style={styles.value}>{crypto.available_supply}</Text>
        </Text>
        <Text style={styles.text}>
          рыночная капитализация USD:{" "}
          <Text style={styles.value}>{crypto.market_cap_usd} $</Text>
        </Text>
        <Text style={styles.text}>
          Изменение торговой цены за 1 час:{" "}
          <Text style={styles.value}>{crypto.percent_change_1h} %</Text>
        </Text>
        <Text style={styles.text}>
          Изменение торговой цены за 24 часа:{" "}
          <Text style={styles.value}>{crypto.percent_change_24h} %</Text>
        </Text>
        <Text style={styles.text}>
          Изменение торговой цены за 7 дней:{" "}
          <Text style={styles.value}>{crypto.percent_change_7d} %</Text>
        </Text>
        <Text style={styles.text}>
          Цена BTC: <Text style={styles.value}>{crypto.price_btc}</Text>
        </Text>
        <Text style={styles.text}>
          Цена USD: <Text style={styles.value}>{crypto.price_usd}</Text>
        </Text>
        <Text style={styles.text}>
          Символ криптовалюты: <Text style={styles.value}>{crypto.symbol}</Text>
        </Text>
        <Text style={styles.text}>
          Кол-во монет, существующих на данный момен:{" "}
          <Text style={styles.value}>{crypto.total_supply}</Text>
        </Text>
      </View>
      <View>
        <Animated.View
          style={{
            opacity: fadeAnim,
            translateY: spinAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [150, 0] // 0 : 150, 0.5 : 75, 1 : 0
            })
          }}
        >
          <Image style={styles.image} source={{ uri: images[crypto.symbol] }} />
        </Animated.View>
      </View>
    </View>
  );
};

CryptoScreen.navigationOptions = ({ navigation }) => {
  const crypto = navigation.getParam("crypto");
  return {
    headerTitle: crypto.name
  };
};

const styles = StyleSheet.compose({
  container: {
    flex: 1,

    padding: 20
  },
  image: {
    width: 150,
    height: 150
  },
  value: {
    fontSize: 14,
    fontWeight: "bold"
  },
  text: {
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1
  },
  text_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  }
});
