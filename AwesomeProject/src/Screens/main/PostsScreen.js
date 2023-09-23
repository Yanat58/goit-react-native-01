import React, {useState,  useEffect} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import avatar from '../../../assets/avatar.jpg';


function PostsScreen({route}) {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
 
  const{login, email, password, photo} = FormData;
  useEffect(() => {
    if (route.params) {
        setPosts((prevState) => [...prevState, route.params])
    }
}, [route.params])

// return (
//   <View>
//      <FlatList data={posts} keyExtractor={(item, index) => index.toString()}
//            renderItem={({item}) => {
//             const name = item.login;
//             const location = item.location;
    return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>Posts</Text>
        <TouchableOpacity style={styles.iconBox}>
          <MaterialIcons
            onPress={() => navigation.navigate('Login')}
            name="logout"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainBox}>
      <Image source={avatar} style={styles.userImg} />
      {/* {item.login? <Text style={styles.text}>{login}</Text> : '' } */}
      <View>
        <Text>{login}</Text>
        <Text>{email}</Text>
      </View>
      </View>
    </View>
  );
//   </View>
// )
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerBox: {
    marginTop: 44,
    flexDirection: 'row',
    width: '100%',
    alignItem: 'center',
    justifyContent: 'center',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
  },

  title: {
    paddingVertical: 11,
    marginLeft: '43%',
    fontWeight: 500,
    fontSize: 17,
    color: '#212121',
  },

  iconBox: {
    marginLeft: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
mainBox: {
  paddingHorizontal: 16,
  flexDirection: 'row',
},
  userImg: {
    marginTop: 32,
    width: 60,
    height: 60,
  },
});

export default PostsScreen;


// import React, {useState, useEffect} from "react";
// import { 
//     StyleSheet, 
//     Text, 
//     View, 
//     FlatList,
//     Image,
//     TouchableOpacity
//  } from "react-native";
//  import { useNavigation } from '@react-navigation/native';
//  import { Ionicons } from '@expo/vector-icons';
//  import { EvilIcons } from '@expo/vector-icons';

//  export const PostsScreen = ({route}) => {

//     const [posts, setPosts] = useState([]);
//     const navigation = useNavigation();

//     useEffect(() => {
//         if (route.params) {
//             setPosts((prevState) => [...prevState, route.params])
//         }
//     }, [route.params])

//     return (
//         <View style={styles.container}>
//            <FlatList data={posts} keyExtractor={(item, index) => index.toString()}
//            renderItem={({item}) => {
//             const name = item.formData.name;
//             const location = item.location;

//            return (<View style={styles.postContainer}>
//             <Image source={{uri: item.photo}} style={styles.image}/>
//             {item.formData.name? <Text style={styles.text}>{name}</Text> : '' }
//             <View style={styles.btnContainer}>
//             <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.button}
//         onPress={() => navigation.navigate('Коментарі')}
//         >
//         <EvilIcons name="comment" size={26} color="#BDBDBD" />
//         <Text style={{color: '#BDBDBD', marginLeft: 5, fontSize: 16,}}>0</Text>
//     </TouchableOpacity>
//     {item.formData.location? <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.button}
//         onPress={() => navigation.navigate('Локація', {name, location})}
//         >
//         <Ionicons name="ios-location-outline" size={24} color='#BDBDBD'/>
//         <Text style={styles.locationText}>{item.formData.location}</Text>
//     </TouchableOpacity>  : '' }
//             </View>
//             </View>)}}/>
//         </View>
//     )
//  }

//  const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         paddingHorizontal: 18,
//         backgroundColor: '#fff',
//     },
//     image: {
//         width: 343,
//         height: 240,
//         borderRadius: 8,
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: '500',
//         marginTop: 5,
//     },
//     button: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row'
//     },
//     btnContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 8,
//     },
//     postContainer: {
//         marginTop: 25,
//     },
//     locationText: {
//         fontSize: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#212121',
//         marginLeft: 4,
//     }

//  })