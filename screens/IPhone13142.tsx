import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13142 = () => {
  return (
    <View style={styles.iphone13141}>
      <PrimaryButton />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <TextInput
        style={[styles.iphone13141Child, styles.iphone13141ShadowBox]}
        placeholder="username"
        placeholderTextColor="#93b1a6"
      />
      <TextInput
        style={[styles.iphone13141Item, styles.iphone13141ShadowBox]}
        placeholder="password"
        placeholderTextColor="#93b1a6"
      />
      <Text style={[styles.forgotPassword, styles.loginTypo]}>
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    position: "absolute",
  },
  iphone13141ShadowBox: {
    fontSize: FontSize.size_base,
    borderWidth: 3,
    borderColor: Color.colorBeige_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_21xl,
    left: "12.56%",
    right: "12.56%",
    width: "74.87%",
    height: "5.92%",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  login: {
    marginLeft: -42,
    top: 230,
    fontSize: 32,
  },
  iphone13141Child: {
    top: "33.89%",
    bottom: "60.19%",
  },
  iphone13141Item: {
    top: "41.47%",
    bottom: "52.61%",
  },
  forgotPassword: {
    marginLeft: -43,
    top: 473,
    fontSize: 10,
  },
  iphone13141: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13142;
