import React from "react";
import { View,  StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AntDesign, Octicons, Feather} from '@expo/vector-icons';
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";


const Tab = createBottomTabNavigator();

export default function Home (){

  return(
    <Tab.Navigator 
    style={styles.tabBar}
    
    initialRouteName="Post" 
    screenOptions={{
      tabBarShowLabel: false,      
      headerShown: false,
      tabBarStyle:styles.tabBar,
    }}
   
    >
<Tab.Screen  
name="Post" 
component={PostsScreen}
 options={{tabBarIcon: ({focused, size, color}) => 
(<AntDesign name="appstore-o" size={size} color={color} focused={focused} />)
}}
 /> 

<Tab.Screen 
 name="CreatePost"
  component={CreatePostsScreen} 
  options={{tabBarIcon: ({focused, size, color}) => (
    <View style={styles.iconBox}>
      <Octicons name="plus" size={size} color="#fff"  focused={focused}/>
     </View>
    ), 
    tabBarVisibilite: false,
    tabBarStyle:{display: 'none'},
}}
  />


<Tab.Screen 
 name="Profile"
  component={ProfileScreen} 
  options={{tabBarIcon: ({focused, size, color}) => (<Feather name="user" size={size} color={color}  focused={focused}/>)}}
  />
    </Tab.Navigator>

  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  },

  iconBox: {
    width: 70, 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#FF6C00', 
    borderRadius: 20,
  },

  tabBar: {
    height: 83,
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#BDBDBD',
  }
});
