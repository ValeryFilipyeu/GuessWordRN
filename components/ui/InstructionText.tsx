import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

type InstructionTextProps = {
  children: React.ReactNode;
  style?: Record<string, string | number>;
};

const InstructionText: React.FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
