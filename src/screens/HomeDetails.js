import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../theme";
import Text from "../components/common/Text";

const HomeDetails = ({ navigation, route }) => {
  const { card } = route.params;
  return (
    <View style={styles.container}>
      <Header backBtn={true} navigation={navigation} />
      <Text>{card.name}</Text>
    </View>
  );
};

export default HomeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
