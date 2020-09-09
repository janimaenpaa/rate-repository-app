import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Text from "./Text";

import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    backgroundColor: theme.colors.button,
    color: "white",
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    fontWeight: "bold",
    marginTop: 6,
  },
});

const SignInForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput name="username" placeholder="Username" />
    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    <TouchableWithoutFeedback onPress={onSubmit}>
      <Text style={styles.button}>Sign in</Text>
    </TouchableWithoutFeedback>
  </View>
);

export default SignInForm;
