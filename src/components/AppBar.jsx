import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
    backgroundColor: theme.appBarColor,
  },
  tabText: {
    color: "white",
    padding: 14,
    fontWeight: "700",
  },
  // ...
});

const Tab = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.tabText}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Tab text="Repositories" />
    </View>
  );
};

export default AppBar;
