import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import ComponentInput from "../Component/Input";

export default function RegistrationScreen() {
  return (
    <View style={styles.formBox}>
      <Text style={styles.title}>Реєстрація</Text>
      <ComponentInput />
      <ComponentInput />
      <ComponentInput />
    </View>
  );
}
const styles = StyleSheet.create({
  formBox: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",

    gap: 16,

    width: "100%",
    height: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 92,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    color: "#000",
    textAlign: "center",
  },
});
