import { StyleSheet, Text as RNText, View } from "react-native";
import React from "react";
import { presets } from "./text.preset";

const Text = ({ children, preset = "default", style }) => {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({});
