import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainHeader from '../Globals/Branding/MainHeader';
import { height, width } from '../Globals/getDImensions';

function SnapShotScreen({route}) {
    const {images}= route.params
  const navigation = useNavigation()
  const viewShotRef = useRef(null);
 

  const saveCapturedImages = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'jpg',
        quality: 0.8,
      });
      console.log(uri);
      console.log('Panorama saved to', uri);
    } catch (error) {
      console.error('Error saving panorama', error);
    }
  
  };
  return (
    <View style={styles.container}>

        <View
        style={{alignItems:"center"}}
        >
          {/* <Text style={styles.title}>Save your tour for Room1</Text> */}
          <MainHeader 
          screenName={"Save Progress"}
          />
          <ViewShot ref={viewShotRef} style={styles.viewShot} options={{ format: 'jpg', quality: 0.9 }}>
            <ScrollView horizontal style={styles.scrollView}>
              {images.map((uri, index) => (
                <Image key={index} style={styles.image} source={{ uri: `file://${uri}` }} />
              ))}
            </ScrollView>
          </ViewShot>
          <TouchableOpacity style={styles.saveButton} onPress={saveCapturedImages}>
            <Text style={styles.buttonText}>Save and View</Text>
          </TouchableOpacity>
        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
    // marginRight: 10,
  },
  saveButton: {
    marginTop: 20,
    height: 50,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  scrollView: {
    width: '100%',
    height: 200,
  },
  image: {
    width: 150,
    height: '100%',
    marginRight: 5,
  },
  viewShot: {
    width: '100%',
    height: 200,
    marginTop:20
  },
});

export default SnapShotScreen;
