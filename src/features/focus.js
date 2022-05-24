import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/roundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  console.log(subject);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          style={styles.textInput}
          label="What would you like to focus on?"
        ></TextInput>
        <View style={styles.button}>
          <RoundedButton
            size={50}
            title="+"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  inputContainer: {
    padding: spacing.lg,
    color: colors.dark,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
});
