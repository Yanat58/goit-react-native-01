import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  console.log(Platform.OS);

  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <StatusBar style="auto" /> */}
    </>
  );
}
