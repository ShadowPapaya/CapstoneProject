import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ApplianceCard = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frame, styles.framePosition]}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={styles.appliance1}>Appliance 1</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.off, styles.onTypo]}>OFF</Text>
        <Text style={[styles.on, styles.onTypo]}>{`ON
`}</Text>
      </View>
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 80,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 27,
    width: 56,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    top: 49,
    borderStyle: "solid",
    position: "absolute",
  },
  onTypo: {
    height: 19,
    width: 45,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: 53,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameChild: {
    width: 80,
    left: 0,
  },
  appliance1: {
    top: 7,
    left: 146,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    width: 193,
    height: 25,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameItem: {
    left: 151,
    backgroundColor: Color.colorDarkslategray_100,
  },
  frameInner: {
    left: 203,
    backgroundColor: Color.colorDarkgray,
  },
  off: {
    left: 156,
  },
  on: {
    left: 208,
  },
  frame: {
    left: 9,
    width: 339,
    overflow: "hidden",
  },
  lineView: {
    marginLeft: -185.5,
    top: 112,
    left: "50%",
    borderColor: Color.colorDarkgray,
    borderTopWidth: 1,
    width: 371,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  frameParent: {
    width: 370,
    height: 112,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default ApplianceCard;
