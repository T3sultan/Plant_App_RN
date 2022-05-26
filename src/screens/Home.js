import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, spacing } from "../theme";
import Text from "../components/common/Text";
import Header from "../components/Header";
import { data } from "../data/data";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [list, setList] = useState(data);

  const searchFilter = text => {
    const filteredList = list.filter(item => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    // console.log(filteredList);
    setList(filteredList);
  };
  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        placeholder="Type any plant name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={text => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
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
  searchInput: {
    padding: spacing[5],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
    margin: spacing[3],
  },
});
