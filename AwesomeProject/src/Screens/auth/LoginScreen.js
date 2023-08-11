import React, { useState } from 'react';
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
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import wallpaper from '../../../assets/bg.jpg';
import open from '../../../assets/open.png';
import close from '../../../assets/close.png';

export default function LoginScreen({navigation}) {
  const { height, width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHide, setPasswordHide] = useState(true);
  const [focus, setFocus] = useState('');

  const setPasswordVisibility = () => {
    setPasswordHide(!passwordHide);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    console.log(email);
    console.log(password);
    setEmail('');
    setPassword('');
  };

  return (
      <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={wallpaper} style={styles.imgBg}>          
          <KeyboardAwareScrollView>
            <View style={styles.formBox}>
              <Text style={styles.title}>Sing in</Text>
              <View
                style={{
                  ...styles.inputBox,
                  borderColor: focus === 'email' ? '#ff6c00' : '#E8E8E8',
                  backgroundColor: focus === 'email' ? '#ffffff' : '#f6f6f6',
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  value={email}
                  placeholder={'Email'}
                  onFocus={() => setFocus('email')}
                  onBlur={() => setFocus('')}
                />
              </View>

              <View
                style={{
                  ...styles.inputBox,
                  borderColor: focus === 'password' ? '#ff6c00' : '#E8E8E8',
                  backgroundColor: focus === 'password' ? '#ffffff' : '#f6f6f6',
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={passwordHide}
                  placeholder={'Password'}
                  onFocus={() => setFocus('password')}
                  onBlur={() => setFocus('')}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={setPasswordVisibility}>
                  <Image source={passwordHide ? open : close} style={styles.imgInput} />
                </TouchableOpacity>
              </View>

              <View style={styles.btnBox}>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={keyboardHide}>
                  <Text>Sign in</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.textBox}>
                <Text style={styles.textAsk}>
                  Don't have an account yet?                 
                    <Text style={styles.textLink}> Sing up.</Text>
                   </Text>              
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
    </TouchableWithoutFeedback>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imgBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  formBox: {
    marginTop: 350,
    alignItems: 'center',
    gap: 16,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 500,

    color: '#000',
    textAlign: 'center',
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    width: '85%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e8e8e8',
    backgroundColor: '#f6f6f6',
  },

  imgInput: {
    width: 30,
    height: 15,
    marginLeft: 'auto',
    marginRight: 6,
  },

  input: {
    paddingRight: 150,
    color: '#000000',
  },

  btnBox: {
    marginHorizontal: 16,
    width: '85%',
  },
  button: {
    marginTop: 27,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: '#ff6c00',
    color: '#ffffff',
    alignItems: 'center',
  },

  textBox: {
    marginBottom: 110,
    display: 'flex',
  },

  textAsk: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1B4371',
  },

  textLink: {
    textDecorationLine: 'underline',
  },
});
