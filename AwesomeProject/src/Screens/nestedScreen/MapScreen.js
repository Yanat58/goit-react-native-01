import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function MapScreen({route}) {
  if (route.params.locationCoords) {
    console.log('route:', route.params.locationCoords)
    const location = route.params.locationCoords

    return (
    <View style={styles.container}>
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
  );
  } else {
  return(
    <View style={styles.container} >
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
  )}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: { 
    flex: 1,
  },
});

export default MapScreen;
