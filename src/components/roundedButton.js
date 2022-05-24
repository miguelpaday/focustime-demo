import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  fontSize = null,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles({ size, fontSize }).radius,
        style,
        props.disabled
          ? {
              borderColor: colors.grey,
            }
          : {},
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text
        style={[
          styles({ size, fontSize }).text,
          textStyle,
          props.disabled
            ? {
                color: colors.grey,
              }
            : {},
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ({ size, fontSize }) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: fontSize ? fontSize / 2 : size / 2,
  },
});
