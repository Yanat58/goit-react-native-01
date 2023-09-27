import React from 'react'
import {moduleName} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import DefaultPostsScreen from '../nestedScreen/DefaultPostsScreen'
import MapScreen from '../nestedScreen/MapScreen'
import CommentsScreen from '../nestedScreen/CommentsScreen'
const NestedScreen = createStackNavigator()

function PostsScreen() {
  return(
 <NestedScreen.Navigator
 screenOptions={{     
  headerShown: false,
}}
 >
  <NestedScreen.Screen 
  name="DefaultScreen" 
  component={DefaultPostsScreen} 
  />
  <NestedScreen.Screen name="Map" component={MapScreen} />
  <NestedScreen.Screen name="Comments" component={CommentsScreen} />
 </NestedScreen.Navigator>
 )
}

export default PostsScreen
