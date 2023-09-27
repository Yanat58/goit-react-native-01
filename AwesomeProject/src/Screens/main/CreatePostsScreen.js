import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const initialData = {
  namePhoto: '',
  location: '',
};

function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState(initialData);
  const [locationCoords, setLocationCoords] = useState(null);
  const { namePhoto, location } = formData;
  const isFocused = useIsFocused;

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      // console.log('camera:', photo.uri)
      setPhoto(photo.uri);

      const location = await Location.getCurrentPositionAsync();
      // console.log('creatLocation:', location);
      // console.log('latitude', location.coords.latitude);
      // console.log('longitude', location.coords.longitude);

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocationCoords(coords);
    } catch (error) {
      console.log(error.message);
    }
  };
  const sendPhoto = () => {
    if (photo) {
      navigation.navigate('DefaultScreen', { photo, locationCoords, formData });
      clearPostPhoto();
    }
  };

  const clearPostPhoto = () => {
    setPhoto('');
    setFormData(initialData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <TouchableOpacity style={styles.backIcon}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>CreatePosts</Text>
      </View>

      <ScrollView>
        <View style={styles.mainBox}>
          {!photo && isFocused ? (
            <>
              <Camera style={styles.photoBox} ref={setCamera}>
                <TouchableOpacity style={styles.cameraIcon} onPress={takePhoto}>
                  <Fontisto name="camera" size={24} color={photo ? '#fff' : '#BDBDBD'} />
                </TouchableOpacity>
              </Camera>
              <Text style={styles.cameraText}>Upload photo</Text>
            </>
          ) : (
            <View >
              <Image style={styles.photoBox} source={{ uri: photo }} resizeMode="cover" />
              <TouchableOpacity style={styles.cameraIcon}>
                <Fontisto name="camera" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.cameraText}>Edit photo</Text>
            </View>
          )}

          <View style={styles.textInput}>
            <TextInput
              onChangeText={value => setFormData(prevState => ({ ...prevState, namePhoto: value }))}
              value={namePhoto}
              placeholder="Name..."
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons
              name="md-location-outline"
              size={24}
              color="black"
              style={styles.locationIcon}
            />

            <TextInput
              onChangeText={value => setFormData(prevState => ({ ...prevState, location: value }))}
              value={location}
              placeholder="Location..."
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: photo ? 'rgba(255, 108, 0, 1)' : '#F6F6F6',
            }}
            activeOpacity={0.8}
            onPress={sendPhoto}
          >
            <Text style={{ ...styles.btnText, color: photo ? '#fff' : '#BDBDBD' }}>Publish</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={clearPostPhoto}
            style={styles.trashIconBox}
          >
            <Ionicons name="ios-trash-outline" size={24} color="black" style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginRight: '33%',
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
  },

  photoBox: {
    position: 'relative',
    marginTop: 32,
    marginBottom: 8,
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },

  cameraIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -35 }, { translateY: -35 }],
    borderRadius: 60,
    padding: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 100,
  },

  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  cameraText: {
    marginBottom: 32,
    fontSize: 16,
    color: '#BDBDBD',
  },

  textInput: {
    marginBottom: 8,
    height: 50,
    justifyContent: 'center',
    color: '#BDBDBD',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    height: 50,
    color: '#BDBDBD',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    alignItems: 'center',
  },

  locationIcon: {
    marginRight: 4,
    color: '#BDBDBD',
    alignItems: 'center',
  },

  button: {
    marginBottom: 120,
    marginTop: 24,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 100,
  },

  btnText: {
    textAlign: 'center',
  },

  trashIconBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },

  trashIcon: {
    color: '#BDBDBD',
  },

  // takePictureContainer: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  // },
});

export default CreatePostsScreen;
