import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import Text from "./common/Text";
import { colors, spacing } from "../theme";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ backBtn, navigation }) => {
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={28} color="white" />
        </Pressable>
      )}

      <Text preset="h2" style={{ marginLeft: spacing[1] }}>
        THE PLANTS
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
