import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/roundedButton";
import { spacing } from "../utils/sizes";

export const Timing = ({ onChangeTime }) => {
  const duration = {
    short: 10,
    medium: 15,
    long: 20,
  };

  return (
    <>
      <View style={styles.timingWrapper}>
        <RoundedButton
          size={80}
          title={duration.short}
          onPress={() => {
            onChangeTime(duration.short);
          }}
        ></RoundedButton>
        <RoundedButton
          size={80}
          title={duration.medium}
          onPress={() => {
            onChangeTime(duration.medium);
          }}
        ></RoundedButton>
        <RoundedButton
          size={80}
          title={duration.long}
          onPress={() => {
            onChangeTime(duration.long);
          }}
        ></RoundedButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingWrapper: {
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
});
