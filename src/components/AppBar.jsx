import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import { Link } from "react-router-native";

import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBarColor,
  },
  tabText: {
    color: "white",
    padding: 14,
    fontWeight: "700",
  },
});

const Tab = ({ text }) => <Text style={styles.tabText}>{text}</Text>;

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Tab text="Repositories" />
        </Link>
        <Link to="/signin">
          <Tab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
