import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainHeader from '../Globals/Branding/MainHeader';
import { height, width } from '../Globals/getDImensions';

function CapturePanoramaScreen() {
  const navigation = useNavigation()
  const camera = useRef(null);
  const viewShotRef = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, 'back');
  const [showCamera, setShowCamera] = useState(true);
  const [images, setImages] = useState([]);
  const [panoramaUri, setPanoramaUri] = useState(null);
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
    setShowCamera(false);
    if (images.length > 0) {
      setStep(2); // Move to the next step after capturing
    } else {
      Alert.alert('No Images Captured', 'Please try again.');
    }
  };

  const saveCapturedImages = async () => {
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'jpg',
        quality: 0.8,
      });
      setPanoramaUri(uri);
      console.log('Panorama saved to', uri);
      setStep(3); // Move to the next step after saving
      navigation.navigate("View")
    } catch (error) {
      console.error('Error saving panorama', error);
    }
  
  };

  const handleNext = () => {
    navigation.navigate("SnapShotScreen",{images:images})

    // setStep(3);
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {step === 1 && showCamera && (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <View style={styles.topMessage}>
          <Text style={{textAlign:"center",fontSize:12}}>
            Try not to capture area which is already captured
          </Text>
          </View>
          <View style={styles.captureControls}>
          <TouchableOpacity 
            // style={styles.captureButton} 
            // onPress={capturePhoto}
            >
              {/* <Text style={styles.buttonText}>Capture Photo</Text> */}
              <Ionicons 
              name="camera-outline"
              size={50}
              color="transparent"
              />
            </TouchableOpacity>
            <TouchableOpacity 
            // style={styles.captureButton} 
            onPress={capturePhoto}>
              {/* <Text style={styles.buttonText}>Capture Photo</Text> */}
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
          <ScrollView horizontal style={styles.thumbnailScroll}>
            {images.map((uri, index) => (
              <Image key={index} style={styles.thumbnail} source={{ uri: `file://${uri}` }} />
            ))}
          </ScrollView>
        </>
      )}

      {step === 2 && (
        <>
          {/* <Text style={styles.title}>Save your tour for Room1</Text>
           */}
            <MainHeader screenName="Finalize Images" />

          <ScrollView contentContainerStyle={styles.imageGrid}>
            {images.map((uri, index) => (
              <Image key={index} style={styles.gridImage} source={{ uri: `file://${uri}` }} />
            ))}
          </ScrollView>
          <TouchableOpacity
          style={{position:"absolute",bottom:20,alignItems:"center"}}
          >

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={()=>{
            setStep(1)
setShowCamera(true)

          }}>
            <Text style={styles.secondaryButtonText}>Take More</Text>
          </TouchableOpacity>
          </TouchableOpacity>
        </>
      )}

      {step === 3 && (
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
      )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
    alignSelf:'center'
  },
  captureControls: {
    position: 'absolute',
    bottom: 90,
    flexDirection:"row",
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topMessage:{
    position: 'absolute',
    top: 30,
    // flexDirection:"row",
    width: '70%',
    padding: 10,
    borderRadius:40,
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    marginBottom: 20,
    height: 50,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  stopButton: {
    // height: 50,
    paddingVertical:!5,
    paddingHorizontal:20,
    // width: 200,
    borderRadius: 25,
    backgroundColor: '#FF5252',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
    // marginRight: 10,
  },
  secondaryButtonText: {
    fontSize: 13,
    color: '#FE6D2B',
    fontWeight: 'bold',
},
  thumbnailScroll: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:15,
    justifyContent: 'center',
  },
  gridImage: {
    width: 100,
    height: 150,
    // aspectRatio:1/9,
    margin: 5,
    borderRadius: 10,
    borderColor: '#DDD',
    borderWidth: 1,
    shadowColor:"rgba(0,0,0,0.8)",
    shadowOpacity:2,
    elevation:4
  },
  nextButton: {
    // marginTop: 20
    // position:"absolute",
    marginBottom:height * 0.02,
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 8,

  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 8,
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

export default CapturePanoramaScreen;
