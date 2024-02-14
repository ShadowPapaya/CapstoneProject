import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1314 = () => {
  return (
    <View style={styles.iphone13143}>
      <View style={styles.iphone13143Child} />
      <Image
        style={styles.untitledDesign11}
        resizeMode="cover"
        source={require("../assets/untitled-design-1-1.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>NAME</Text>
      <View style={[styles.iphone13143Item, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Item, styles.iphone13143ChildLayout]} />
      <View style={[styles.rectangleView, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child1, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child2, styles.iphone13143ChildLayout]} />
      <Text style={[styles.hostel, styles.nameTypo]}>HOSTEL</Text>
      <Text style={[styles.rollNo, styles.nameTypo]}>ROLL NO.</Text>
      <Text style={[styles.roomNo, styles.nameTypo]}>ROOM NO.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    left: 72,
    position: "absolute",
  },
  iphone13143ChildLayout: {
    height: 45,
    width: 284,
    borderWidth: 3,
    borderColor: Color.colorBeige_200,
    borderRadius: Border.br_15xl,
    left: "50%",
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  iphone13143Child: {
    top: 42,
    left: 14,
    borderBottomRightRadius: Border.br_15xl,
    borderBottomLeftRadius: Border.br_15xl,
    borderColor: "rgba(240, 237, 207, 0.3)",
    borderWidth: 2,
    width: 359,
    height: 187,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  untitledDesign11: {
    marginLeft: -31,
    top: 196,
    borderRadius: 33,
    width: 63,
    height: 63,
    left: "50%",
    position: "absolute",
  },
  name: {
    top: 323,
  },
  iphone13143Item: {
    top: 354,
    marginLeft: -142,
    width: 284,
    borderWidth: 3,
    borderColor: Color.colorBeige_200,
    borderRadius: Border.br_15xl,
  },
  rectangleView: {
    top: 457,
    marginLeft: -142,
    width: 284,
    borderWidth: 3,
    borderColor: Color.colorBeige_200,
    borderRadius: Border.br_15xl,
  },
  iphone13143Child1: {
    top: 560,
    marginLeft: -142,
    width: 284,
    borderWidth: 3,
    borderColor: Color.colorBeige_200,
    borderRadius: Border.br_15xl,
  },
  iphone13143Child2: {
    marginLeft: -141,
    top: 663,
  },
  hostel: {
    top: 532,
  },
  rollNo: {
    top: 429,
  },
  roomNo: {
    top: 634,
  },
  iphone13143: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
