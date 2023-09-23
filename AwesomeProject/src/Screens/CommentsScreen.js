import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function ComentsScreen() {
  return (
    <View style={styles.container} >
        <Text>ComentsScreen
        </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ComentsScreen