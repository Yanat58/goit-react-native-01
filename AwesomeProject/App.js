import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import shralers from "./image/bg.jpg";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={shralers} style={styles.imgBg}>
        <RegistrationScreen />

        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
