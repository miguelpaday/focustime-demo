import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/countdown";
import { RoundedButton } from "../components/roundedButton";
import { Timing } from "./timing";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { useKeepAwake } from "expo-keep-awake";

const PATTERN = [
  10, 200, 50, 200, 50, 400, 50, 400, 50, 400, 250, 200, 50, 200, 50, 200, 1000,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState();
  const [progress, setProgress] = useState(1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdownContainer}>
        <Countdown
          isPaused={!isStarted}
          minutes={minutes}
          borderRadius={50}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar
        style={{
          height: spacing.sm,
          marginBottom: spacing.md,
        }}
        progress={progress}
        color={colors.pastelBlue}
      />
      <Timing onChangeTime={setMinutes} />

      <View style={[styles.buttonWrapper]}>
        <RoundedButton
          size={150}
          fontSize={130}
          title={isStarted ? "❙❙" : "▶"}
          onPress={() => {
            {
              isStarted ? setIsStarted(false) : setIsStarted(true);
            }
            Vibration.cancel();
          }}
        ></RoundedButton>

        <View style={styles.clearContainer}>
          <RoundedButton
            style={{ alignSelf: "flex-end" }}
            size={75}
            fontSize={70}
            title="✕"
            onPress={() => {
              clearSubject();
            }}
          ></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdownContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    flex: 0.5,
    padding: spacing.md,
    paddingRight: spacing.xxxl,
    paddingLeft: spacing.xxxl,
    justifyContent: "space-evenly",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  clearContainer: {
    alignSelf: "flex-start",
  },
});
