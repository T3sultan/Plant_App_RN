import { StyleSheet, View, ScrollView, Pressable, Linking } from "react-native";
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
import PlantSection from "../components/common/PlantSection";

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
  const onPressLink = () => {
    Linking.openURL(card.wikiLink);
  };

  return (
    <View style={styles.container}>
      <Header backBtn={true} navigation={navigation} />
      <ScrollView>
        <View style={styles.imageStyle}>{renderImage(card.name)}</View>
        <View style={styles.detailsStyle}>
          <Text preset="h2" style={styles.nameStyle}>
            {card.name}
          </Text>
          <Text preset="h4" style={styles.details}>
            {card.description}
          </Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text preset="small" style={styles.sourceText}>
              Source:{" "}
            </Text>
            <Text preset="h5" style={styles.wiki}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <View style={styles.wrapper}>
          <PlantSection title="ROTATION TIME" value={card.rotationTime} />
          <PlantSection title="REVOLUTION TIME" value={card.revolutionTime} />
          <PlantSection title="RADIUS" value={card.radius} />
          <PlantSection title="AVERAGE TEMP." value={card.avgTemp} />
        </View>
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
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsStyle: {
    marginTop: spacing[8],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  nameStyle: {
    textTransform: "uppercase",
  },
  details: {
    marginTop: spacing[4],
    lineHeight: 21,
    textAlign: "center",
  },
  source: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: spacing[4],
  },
  wiki: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  wrapper: {
    marginTop: spacing[4],
  },
});
