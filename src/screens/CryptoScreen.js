import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CryptoScreen = ({ navigation }) => {
  const crypto = navigation.getParam("crypto");
  if (!crypto) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>
          ранк:
          <Text style={styles.value}>{crypto.rank}</Text>
        </Text>
        <Text style={styles.text}>
          Доступный запас:{" "}
          <Text style={styles.value}>{crypto.available_supply}</Text>
        </Text>
        <Text style={styles.text}>
          Id: <Text style={styles.value}>{crypto.id}</Text>
        </Text>
        <Text style={styles.text}>
          last_updated: <Text style={styles.value}>{crypto.last_updated}</Text>
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
          Приблизительное общее количество монет, существующих на данный момен:{" "}
          <Text style={styles.value}>{crypto.total_supply}</Text>
        </Text>
      </View>
      <View>
        <Image style={styles.image} source={{ uri: images[crypto.symbol] }} />
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
    flexDirection: "row",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  image: {
    width: 100,
    height: 100
  },
  value: {
    fontSize: 14,
    fontWeight: "bold"
  },
  text: {
    alignItem: "space-between"
  },
  text_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
