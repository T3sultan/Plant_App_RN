import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { colors, fonts, spacing } from "../theme";
import Text from "../components/common/Text";
import Header from "../components/Header";
import { data } from "../data/data";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={styles.item}
              onPress={() => navigation.navigate("HomeDetails", { card: item })}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[styles.circle, { backgroundColor: item.color }]}
                />
                <Text preset="h4" style={styles.itemName}>
                  {item.name}
                </Text>
              </View>

              <AntDesign name="right" size={20} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
