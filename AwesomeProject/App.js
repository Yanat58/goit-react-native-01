import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import RegistrationScreen from './src/Screens/auth/RegistrationScreen';
import LoginScreen from './src/Screens/auth/LoginScreen';
import Home from './src/Screens/main/Home';

const MainStack = createStackNavigator();

export default function App() {
  console.log(Platform.OS);

    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen options={{headerShown: false,}} name="Register" component={RegistrationScreen} />
          <MainStack.Screen options={{headerShown: false,}} name="Login" component={LoginScreen} />
          <MainStack.Screen options={{headerShown: false,}} name="Home" component={Home} />
        </MainStack.Navigator>
      </NavigationContainer>
        );
}
