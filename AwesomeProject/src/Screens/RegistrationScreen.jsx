import React, { useEffect, useState } from "react";
import {
  TextInput,
  Image,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  useWindowDimensions,
} from "react-native";
import wallpaper from "../../assets/bg.jpg";
import avatar from "../../assets/avatar.jpg";
import open from "../../assets/open.png";
import close from "../../assets/close.png";
import { AntDesign } from "@expo/vector-icons";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function RegistrationScreen() {
  const { height, width } = useWindowDimensions();
  console.log(height, width);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [focus, setFocus] = useState("");
  const setPasswordVisibility = () => {
    setPasswordHide(!passwordHide);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const addAvatar = () => {
    setSelectedImage(avatar);
  };

  const removeAvatar = () => {
    setSelectedImage("");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.imgBg}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -97 : -80}
            enable
          >
            <View style={styles.formBox}>
              {selectedImage ? (
                <View style={styles.imgBox}>
                  <Image source={avatar} style={styles.userImg} />
                  <Pressable style={styles.iconBox} onPress={removeAvatar}>
                    <AntDesign name="closecircleo" size={24} color="#d4d3d3" />
                  </Pressable>
                </View>
              ) : (
                <View style={styles.imgBox}>
                  <Pressable style={styles.iconBox} onPress={addAvatar}>
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color="#ff6c00"
                      fill="ffffff"
                      style={styles.icon}
                    />
                  </Pressable>
                </View>
              )}

              <Text style={styles.title}>Register</Text>
              <View
                style={{
                  ...styles.inputBox,
                  borderColor: focus === "login" ? "#ff6c00" : "#E8E8E8",
                  backgroundColor: focus === "login" ? "#ffffff" : "#f6f6f6",
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={setLogin}
                  value={login}
                  placeholder="Login"
                  onFocus={() => setFocus("login")}
                  onBlur={() => setFocus("")}
                />
              </View>

              <View
                style={{
                  ...styles.inputBox,
                  borderColor: focus === "email" ? "#ff6c00" : "#E8E8E8",
                  backgroundColor: focus === "email" ? "#ffffff" : "#f6f6f6",
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Email"
                  onFocus={() => setFocus("email")}
                  onBlur={() => setFocus("")}
                />
              </View>

              <View
                style={{
                  ...styles.inputBox,
                  borderColor: focus === "password" ? "#ff6c00" : "#E8E8E8",
                  backgroundColor: focus === "password" ? "#ffffff" : "#f6f6f6",
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={passwordHide}
                  placeholder="Password"
                  onFocus={() => setFocus("password")}
                  onBlur={() => setFocus("")}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={setPasswordVisibility}
                >
                  <Image
                    source={passwordHide ? open : close}
                    style={styles.imgInput}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.btnBox}>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.link}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.textAsk}>Do have an account? Sing in.</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "flex-end",
  },

  formBox: {
    position: "relative",
    marginTop: 300,
    alignItems: "center",
    gap: 16,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },

  userImg: {
    position: "absolute",
    width: 120,
    borderRadius: 16,
  },

  imgBox: {
    position: "absolute",
    top: -60,

    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },

  iconBox: {
    width: 24,
    height: 24,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    top: 75,
    right: -12,
  },

  title: {
    marginTop: 92,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 500,

    color: "#000",
    textAlign: "center",
  },

  inputBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
  },

  imgInput: {
    width: 30,
    height: 15,
    marginLeft: "auto",
    marginRight: 6,
  },

  input: {
    paddingRight: 150,
    color: "#000000",
  },

  btnBox: {
    width: "85%",
  },
  button: {
    marginTop: 27,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
  },

  textAsk: {
    marginBottom: 45,
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
