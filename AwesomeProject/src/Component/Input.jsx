import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function ComponentInput() {
  return (
    <View style={styles.inputBox}>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 6,
  },
  input: {
    height: 50,

    backgroundColor: "rgba(246, 246, 246, 1)",
  },
});
