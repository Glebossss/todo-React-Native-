import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#001E31",
  },

  text: {
    color: "white",
    fontSize: 40,
    fontWeight: 500,
    padding: '2%'
  },
});

export default Header;
