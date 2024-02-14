import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const PrimaryButton = () => {
  return (
    <Button
      style={styles.primaryButton}
      mode="contained-tonal"
      labelStyle={styles.primaryButtonBtn}
      contentStyle={styles.primaryButtonBtn1}
    >
      Submit
    </Button>
  );
};

const styles = StyleSheet.create({
  primaryButtonBtn: {
    color: "#f0edcf",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  primaryButtonBtn1: {
    borderRadius: 40,
  },
  primaryButton: {
    position: "absolute",
    top: 417,
    right: 52,
    bottom: 383,
    left: 52,
  },
});

export default PrimaryButton;
