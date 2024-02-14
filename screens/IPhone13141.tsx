import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ApplianceCard from "../components/ApplianceCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13141 = () => {
  return (
    <View style={styles.iphone13142}>
      <View style={styles.frame}>
        <View style={styles.frameItem} />
      </View>
      <View style={styles.frame1}>
        <View style={[styles.lineParent, styles.parentLayout]}>
          <View style={styles.frameInner} />
          <View style={styles.frame2}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.appliance2, styles.applianceTypo]}>
              Appliance 2
            </Text>
            <View style={[styles.rectangleView, styles.frameChild3Layout]} />
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
            <Text style={[styles.off, styles.offTypo]}>OFF</Text>
            <Text style={[styles.on, styles.offTypo]}>{`ON
`}</Text>
          </View>
        </View>
        <View style={[styles.ellipseParent, styles.parentLayout]}>
          <Image
            style={[styles.frameChild2, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.appliance3, styles.applianceTypo]}>
            Appliance 3
          </Text>
          <View style={[styles.frameChild3, styles.frameChild3Layout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.off1, styles.offTypo]}>OFF</Text>
          <Text style={[styles.on1, styles.offTypo]}>{`ON
`}</Text>
          <View style={styles.frameInner} />
        </View>
        <View style={[styles.ellipseGroup, styles.parentLayout]}>
          <Image
            style={[styles.frameChild2, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.appliance3, styles.applianceTypo]}>
            Appliance 5
          </Text>
          <View style={[styles.frameChild3, styles.frameChild3Layout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.off1, styles.offTypo]}>OFF</Text>
          <Text style={[styles.on1, styles.offTypo]}>{`ON
`}</Text>
          <View style={styles.frameInner} />
        </View>
        <View style={[styles.ellipseContainer, styles.parentLayout]}>
          <Image
            style={[styles.frameChild2, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.appliance3, styles.applianceTypo]}>
            Appliance 4
          </Text>
          <View style={[styles.frameChild3, styles.frameChild3Layout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Text style={[styles.off1, styles.offTypo]}>OFF</Text>
          <Text style={[styles.on1, styles.offTypo]}>{`ON
`}</Text>
          <View style={styles.frameInner} />
        </View>
        <ApplianceCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 112,
    width: 370,
    left: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 80,
    height: 80,
    top: 0,
    position: "absolute",
  },
  applianceTypo: {
    height: 25,
    width: 193,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_6xl,
    top: 7,
    position: "absolute",
  },
  frameChild3Layout: {
    height: 27,
    width: 56,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    top: 49,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  frameChildLayout: {
    backgroundColor: Color.colorDarkgray,
    height: 27,
    width: 56,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    top: 49,
    borderStyle: "solid",
    position: "absolute",
  },
  offTypo: {
    height: 19,
    width: 45,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: 53,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frameItem: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 90,
    backgroundColor: Color.colorDarkslategray_100,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame: {
    height: 845,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
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
  ellipseIcon: {
    left: 0,
  },
  appliance2: {
    left: 146,
  },
  rectangleView: {
    left: 151,
  },
  frameChild1: {
    left: 203,
  },
  off: {
    left: 156,
  },
  on: {
    left: 208,
  },
  frame2: {
    width: 339,
    height: 80,
    left: 9,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lineParent: {
    top: 143,
  },
  frameChild2: {
    left: 9,
    width: 80,
  },
  appliance3: {
    left: 155,
  },
  frameChild3: {
    left: 160,
  },
  frameChild4: {
    left: 212,
  },
  off1: {
    left: 165,
  },
  on1: {
    left: 217,
  },
  ellipseParent: {
    top: 286,
  },
  ellipseGroup: {
    top: 572,
  },
  ellipseContainer: {
    top: 429,
  },
  frame1: {
    top: 121,
    left: 10,
    height: 684,
    width: 370,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13142: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13141;
