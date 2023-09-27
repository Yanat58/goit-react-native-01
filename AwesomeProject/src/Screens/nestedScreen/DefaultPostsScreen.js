import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, Ionicons,} from '@expo/vector-icons';
import avatar from '../../../assets/avatar.jpg';

function DefaultPostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log('post:', posts);

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
        <View style={styles.userBox}>
          <Image source={avatar} style={styles.userImg} />
          {/* {login ? <Text style={styles.text}>{login}</Text> : ''} */}
          <View style={styles.textBox}>
            <Text style={styles.textLogin}>Natali Romanova</Text>
            <Text style={styles.textEmail}>email@example.com</Text>
          </View>
        </View>

        <View>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              // console.log('item:', item)
              const name = item.formData.namePhoto;
              const location = item.formData.location;
              const locationCoords = item.locationCoords
              return (
                <View style={styles.postInfo}>
                  <Image source={{ uri: item.photo }} style={styles.photo} />
                 {name ? <Text style={styles.textName}>{name}</Text> : ''}

                  <View style={styles.boxMapLocation}>
                    <View style= {styles.boxMap}>
                    <TouchableOpacity
                      style={styles.btnComments}
                      onPress={() => navigation.navigate('Comments')}
                    >
                     <Ionicons name="ios-chatbubble-outline" 
                     size={24} color="#BDBDBD" 
                     style={styles.commentIcon}/> 

                    </TouchableOpacity>
                    <Text style={styles.commentQuantity}>0</Text>
                    </View>

                    <View style={styles.boxLocation} >
                    <TouchableOpacity
                      sttyle={styles.btnMap}
                      onPress={() => navigation.navigate('Map', {location, locationCoords})}
                    >
                      <Ionicons
                        name="md-location-outline"
                        size={24}
                        color="#BDBDBD"
                        style={styles.locationIcon}
                      />
                    </TouchableOpacity>
                   {location ? <Text style={styles.locationText}>{location}</Text> : ''}
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
  //
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

  userBox: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    marginLeft: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  textBox: {
    textAlign: 'center',
  },

  textLogin: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 13,
    color: '#212121',
  },

  textEmail: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },

  mainBox: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    gap: 32,
  },

  userImg: {
    marginRight: 8,
    width: 60,
    height: 60,
  },

  photo: {
    marginBottom: 8,
    alignSelf: 'center',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },

  textName: {
    marginBottom: 8,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 16,
    color: '#212121',
  },

  boxMapLocation: {
    marginBottom: 32,
    flexDirection: 'row',
justifyContent: 'space-between'
  },

  boxMap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentIcon: {
   marginRight: 6,
    transform: [{ scaleY: -1 }],
  },

  commentQuantity: {
    marginRight: 49,
    fontSize: 16,
    fontWeight: 400,
    color: '#BDBDBD',
  },

boxLocation: {
  flexDirection: 'row',
  alignItems: 'baseline',
},

  locationIcon: {
   marginRight: 4,
  },

  locationText: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
  },
});

export default DefaultPostsScreen;

