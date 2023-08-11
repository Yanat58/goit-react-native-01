import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./main/PostsScreen";
import ProfileScreen from "./main/ProfileScreen";
import CreatePostsScreen from "./main/CreatePostsScreen";


const Tab = createBottomTabNavigator();

export default function Home (){
  return(
    <Tab.Navigator initialRouteName="Post">
<Tab.Screen options={{headerShown: false,}} name="Post" component={PostsScreen} /> 
<Tab.Screen options={{headerShown: false,}} name="Profile" component={ProfileScreen} />
<Tab.Screen options={{headerShown: false,}} name="CreatePost" component={CreatePostsScreen} />

    </Tab.Navigator>
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
