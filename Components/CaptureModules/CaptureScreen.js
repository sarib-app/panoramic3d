import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainHeader from '../Globals/Branding/MainHeader';
import { height, width } from '../Globals/getDImensions';
import CaptureStyles from './CaptureStyles';
function CapturePanoramaScreen({route}) {
  const  {property_id} = route.params
  const  {label} = route.params


  const navigation = useNavigation()
  const camera = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, 'back');
  const [showCamera, setShowCamera] = useState(true);
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);

  const capturePhoto = async () => {
    if (camera.current) { 
      try {
        const photo = await camera.current.takePhoto();
        setImages((prevImages) => [...prevImages, photo.path]);
        console.log('Captured photo:', photo.path);
      } catch (error) {
        console.log('Error capturing photo:', error);
      }
    }
  };

  const stopPanoramaCapture = () => {
    if (images.length > 0) {
      setShowCamera(false);
      setStep(2); // Move to the next step after capturing
    } else {
      Alert.alert('No Images Captured', 'Please try again.');
    }
  };



  const handleNext = () => {

    if(images.length > 0){

      navigation.navigate("SnapShotScreen",{images:images,property_id:property_id,label:label})
    }
    else{
      Alert.alert("Wait","Please click one or more thean one image")
    }

    // setStep(3);
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={CaptureStyles.container}>
      {step === 1 && showCamera && (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <View style={CaptureStyles.topMessage}>
          <Text style={{textAlign:"center",fontSize:12}}>
            Try not to capture area which is already captured
          </Text>
          </View>
          <View style={CaptureStyles.captureControls}>
          <TouchableOpacity 
            // style={CaptureStyles.captureButton} 
            // onPress={capturePhoto}
            >
              {/* <Text style={CaptureStyles.buttonText}>Capture Photo</Text> */}
              <Ionicons 
              name="camera-outline"
              size={50}
              color="transparent"
              />
            </TouchableOpacity>
            <TouchableOpacity 
            // style={CaptureStyles.captureButton} 
            onPress={capturePhoto}>
              {/* <Text style={CaptureStyles.buttonText}>Capture Photo</Text> */}
              <Ionicons 
              name="camera-outline"
              size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={stopPanoramaCapture}>
            <Ionicons 
              name="checkmark-done-circle"
              size={40}
              color={"#FE6D2B"}
              />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={CaptureStyles.thumbnailScroll}>
            {images.map((uri, index) => (
              <Image key={index} style={CaptureStyles.thumbnail} source={{ uri: `file://${uri}` }} />
            ))}
          </ScrollView>
        </>
      )}

      {step === 2 && (
        <>
          {/* <Text style={CaptureStyles.title}>Save your tour for Room1</Text>
           */}
            <MainHeader screenName="Finalize Images" />

          <ScrollView contentContainerStyle={CaptureStyles.imageGrid}>
            {images.map((uri, index) => (
              <Image key={index} style={CaptureStyles.gridImage} source={{ uri: `file://${uri}` }} />
            ))}
          </ScrollView>
          <TouchableOpacity
          style={{position:"absolute",bottom:20,alignItems:"center"}}
          >

          <TouchableOpacity style={CaptureStyles.nextButton} onPress={handleNext}>
            <Text style={CaptureStyles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CaptureStyles.secondaryButton} onPress={()=>{
            setStep(1)
setShowCamera(true)

          }}>
            <Text style={CaptureStyles.secondaryButtonText}>Take More</Text>
          </TouchableOpacity>
          </TouchableOpacity>
        </>
      )}


    </View>
  );
}


export default CapturePanoramaScreen;
