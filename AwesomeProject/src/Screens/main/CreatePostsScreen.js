import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const initialData = {
  namePhoto: '',
  location: '',
};
function CreatePostsScreen({ navigation }) {
  const [formData, setFormData] = useState(initialData);
  const [focus, setFocus] = useState('');

  const { namePhoto, location } = formData;

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
          <View style={styles.photoBox}>
            <Fontisto name="camera" size={24} color="#BDBDBD" style={styles.cameraIcon} />
          </View>
          <Text style={styles.cameraText}>Add photo</Text>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={value => setFormData(prevState => ({ ...prevState, namePhoto: value }))}
              value={namePhoto}
              placeholder="Name..."
              onFocus={() => setFocus('login')}
              onBlur={() => setFocus('')}
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
              onFocus={() => setFocus('location')}
              onBlur={() => setFocus('')}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            // onPress={onSubmit}
          >
            <Text style={styles.btnText}>Publish</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={clearScreen}
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
    marginTop: 32,
    marginBottom: 8,
    position: 'relative',
    width: '98%',
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
    top: 90,
    left: '43%',
    borderRadius: 60,
    padding: 18,
    backgroundColor: '#fff',
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
    marginBottom: 80,
    marginTop: 24,
    width: '98%',
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },

  btnText: {
    textAlign: 'center',
    color: '#BDBDBD',
  },

  trashIcon: {
    alignSelf: 'center',
    color: '#BDBDBD',
  },
});

export default CreatePostsScreen;
