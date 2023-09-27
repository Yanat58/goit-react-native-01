import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

function MapScreen({route, navigation}) {
  if (route.params.locationCoords) {
    console.log('route:', route.params.locationCoords)
    const location = route.params.locationCoords

    return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <TouchableOpacity style={styles.backIcon}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Map</Text>
      </View>
      <View style={styles.mainBox}>
      {location && <MapView style={styles.map} 
      region={{
        longitude:location.longitude, 
        latitude: location.latitude,
        latitudeDelta: 0.001, 
        longitudeDelta: 0.006}}>
         <Marker
          coordinate={{latitude:location.latitude, longitude: location.longitude}}
          title={route.params.location}
          />
      </MapView>}
      </View>
    </View>
  );
  } else {
  return(
    <View style={styles.container} >
      <View style={styles.headerBox}>
        <TouchableOpacity style={styles.backIcon}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Map</Text>
      </View>
      <View style={styles.mainBox}>
      <MapView style={styles.map}
      region={{
        latitude: 37.78825, 
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta:0.0421,
      }}
      mapType='standard'
      minZoomLevel={15}
      onMapReady={()=> console.log('Map is ready')}
      onRegionChange={()=> console.log('Region change')}
      >
        <Marker 
        title='I am here'
        coordinate={{latitude: 37.78825, longitude: -122.4324,}}
        description='Hello'
        />
      </MapView>
      </View>
    </View>
  )}
  
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
    marginRight: '45%',
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
  map: { 
    flex: 1,
  },
});

export default MapScreen;
