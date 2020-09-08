import React from "react";
import { TextInput as NativeTextInput } from "react-native";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  if (error) {
    return (
      <NativeTextInput
        style={[textInputStyle, { borderColor: "#d73a4a" }]}
        {...props}
      />
    );
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
