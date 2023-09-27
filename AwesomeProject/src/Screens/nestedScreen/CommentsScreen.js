import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CommentsScreen({ route, navigation }) {
  const [comment, setComment] = useState(null);
  //   console.log('comments:', route.params);

  //   const {photo} = route.params
  // console.log('photo:', photo)

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <TouchableOpacity style={styles.backIcon}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
      </View>
      <View style={styles.mainBox}>
        {/* <Image source={{ uri: photo }} style={styles.photo} /> */}
        {/* <FlatList
            data={comment}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              console.log('item:', item)
              console.log(item.photo)
              // const name = item.formData.namePhoto;
              // const location = item.formData.location;
              // const locationCoords = item.locationCoords
              const photo = item.photo
              return (     
        )}}
        /> */}

        <View style={styles.textInput}>
          <TextInput
            onChangeText={value => setComment(prevState => ({ ...prevState, comment: value }))}
            value={comment}
            placeholder="Comment..."
          />
          <TouchableOpacity style={styles.iconSendBox}>
            <Ionicons name="arrow-up" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    marginRight: '35%',
    fontWeight: 500,
    fontSize: 17,
    color: '#212121',
  },

  backIcon: {
    marginRight: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 11,
  },

  mainBox: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  photo: {
    marginBottom: 8,
    alignSelf: 'center',
    width: '100%',
    height: 240,
    borderRadius: 8,
  },

  textInput: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingLeft: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
  },

  iconSendBox: {
    marginLeft: 'auto',
    marginRight: 8,
    backgroundColor: '#FF6COO',
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 108, 0, 1)',
  },
});

export default CommentsScreen;
