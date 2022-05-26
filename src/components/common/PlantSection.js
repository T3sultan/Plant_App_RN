import { StyleSheet, View } from "react-native";
import React from "react";
import { colors, spacing } from "../../theme";
import Text from "./Text";

const PlantSection = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text preset="h4" style={styles.textStyle}>
        {title}
      </Text>
      <Text>{value}</Text>
    </View>
  );
};

export default PlantSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[2],
    borderRadius: spacing[1],
  },
  textStyle: {
    color: colors.white,
  },
});
