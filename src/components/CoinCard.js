import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { images } from '../store/types';

export const CoinCard = ({ crypto, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(crypto)}>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <Image style={styles.image} source={{ uri: images[crypto.symbol] }} />
          <Text style={styles.coinSymbol}>{crypto.symbol}</Text>
          <Text style={styles.seperator}>|</Text>
          <Text style={styles.coinName}>{crypto.name}</Text>
          <Text style={styles.coinPrice}>
            {/* {Math.ceil(crypto.price_usd * 1000) / 1000} */}
            {crypto.price_usd}
            <Text style={StyleSheet.bold}>$</Text>
          </Text>
        </View>
        <View style={styles.statisticsContainer}>
          <Text>
            24h:
            <Text
              style={
                crypto.percent_change_24h < 0
                  ? styles.percentChangeMinus
                  : styles.percentChangePlus
              }
            >
              {" "}
              {crypto.percent_change_24h} %{" "}
            </Text>
          </Text>
          <Text>
            7d:
            <Text
              style={
                crypto.percent_change_7d < 0
                  ? styles.percentChangeMinus
                  : styles.percentChangePlus
              }
            >
              {" "}
              {crypto.percent_change_7d} %{" "}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.compose({
  container: {
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  bold: {
    fontWeight: "bold"
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold"
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  seperator: {
    marginTop: 10
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold"
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: "bold"
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});
