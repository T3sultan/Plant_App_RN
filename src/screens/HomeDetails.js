import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors, spacing } from "../theme";
import Text from "../components/common/Text";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

const HomeDetails = ({ navigation, route }) => {
  const { card } = route.params;

  const renderImage = name => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
    }
  };

  return (
    <View style={styles.container}>
      <Header backBtn={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.imageStyle}>{renderImage(card.name)}</View>
      </ScrollView>
    </View>
  );
};

export default HomeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageStyle: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
});
