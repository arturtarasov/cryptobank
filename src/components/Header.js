import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Crypto Bank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 55,
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});
