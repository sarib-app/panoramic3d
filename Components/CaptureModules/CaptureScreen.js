// import React, { useState, useRef } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
// import { Camera, getCameraDevice } from 'react-native-vision-camera';
// import ViewShot, { captureRef } from 'react-native-view-shot';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MainHeader from '../Globals/Branding/MainHeader';
// import { height, width } from '../Globals/getDImensions';
// import CaptureStyles from './CaptureStyles';
// function CapturePanoramaScreen({route}) {
//   const  {property_id} = route.params
//   const  {label} = route.params


//   const navigation = useNavigation()
//   const camera = useRef(null);
//   const devices = Camera.getAvailableCameraDevices();
//   const device = getCameraDevice(devices, 'back');
//   const [showCamera, setShowCamera] = useState(true);
//   const [images, setImages] = useState([]);
//   const [step, setStep] = useState(1);

//   const capturePhoto = async () => {
//     if (camera.current) { 
//       try {
//         const photo = await camera.current.takePhoto();
//         setImages((prevImages) => [...prevImages, photo.path]);
//         console.log('Captured photo:', photo.path);
//       } catch (error) {
//         console.log('Error capturing photo:', error);
//       }
//     }
//   };

//   const stopPanoramaCapture = () => {
//     if (images.length > 0) {
//       setShowCamera(false);
//       setStep(2); // Move to the next step after capturing
//     } else {
//       Alert.alert('No Images Captured', 'Please try again.');
//     }
//   };



//   const handleNext = () => {

//     if(images.length > 0){

//       navigation.navigate("SnapShotScreen",{images:images,property_id:property_id,label:label})
//     }
//     else{
//       Alert.alert("Wait","Please click one or more thean one image")
//     }

//     // setStep(3);
//   };

//   if (device == null) {
//     return <Text>Camera not available</Text>;
//   }

//   return (
//     <View style={CaptureStyles.container}>
//       {step === 1 && showCamera && (
//         <>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={showCamera}
//             photo={true}
//           />
//           <View style={CaptureStyles.topMessage}>
//           <Text style={{textAlign:"center",fontSize:12}}>
//             Try not to capture area which is already captured
//           </Text>
//           </View>
//           <View style={CaptureStyles.captureControls}>
//           <TouchableOpacity 
//             // style={CaptureStyles.captureButton} 
//             // onPress={capturePhoto}
//             >
//               {/* <Text style={CaptureStyles.buttonText}>Capture Photo</Text> */}
//               <Ionicons 
//               name="camera-outline"
//               size={50}
//               color="transparent"
//               />
//             </TouchableOpacity>
//             <TouchableOpacity 
//             // style={CaptureStyles.captureButton} 
//             onPress={capturePhoto}>
//               {/* <Text style={CaptureStyles.buttonText}>Capture Photo</Text> */}
//               <Ionicons 
//               name="camera-outline"
//               size={50}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity  onPress={stopPanoramaCapture}>
//             <Ionicons 
//               name="checkmark-done-circle"
//               size={40}
//               color={"#FE6D2B"}
//               />
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal style={CaptureStyles.thumbnailScroll}>
//             {images.map((uri, index) => (
//               <Image key={index} style={CaptureStyles.thumbnail} source={{ uri: `file://${uri}` }} />
//             ))}
//           </ScrollView>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           {/* <Text style={CaptureStyles.title}>Save your tour for Room1</Text>
//            */}
//             <MainHeader screenName="Finalize Images" />

//           <ScrollView contentContainerStyle={CaptureStyles.imageGrid}>
//             {images.map((uri, index) => (
//               <Image key={index} style={CaptureStyles.gridImage} source={{ uri: `file://${uri}` }} />
//             ))}
//           </ScrollView>
//           <TouchableOpacity
//           style={{position:"absolute",bottom:20,alignItems:"center"}}
//           >

//           <TouchableOpacity style={CaptureStyles.nextButton} onPress={handleNext}>
//             <Text style={CaptureStyles.buttonText}>Let's Go</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={CaptureStyles.secondaryButton} onPress={()=>{
//             setStep(1)
// setShowCamera(true)

//           }}>
//             <Text style={CaptureStyles.secondaryButtonText}>Take More</Text>
//           </TouchableOpacity>
//           </TouchableOpacity>
//         </>
//       )}


//     </View>
//   );
// }


// export default CapturePanoramaScreen;








// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { Camera, getCameraDevice } from 'react-native-vision-camera';
// import { gyroscope } from 'react-native-sensors';
// // import MainHeader from '../../../component/AppHeaderV2.jsx';
// import { height, width } from '../Globals/getDImensions';
// import CaptureStyles from './CaptureStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// function CapturePanoramaScreen({ route }) {
//   const { property_id } = route.params;
//   const { label } = route.params;

//   const navigation = useNavigation();
//   const camera = useRef(null);
//   const devices = Camera.getAvailableCameraDevices();
//   const device = getCameraDevice(devices, 'back');
//   const [showCamera, setShowCamera] = useState(true);
//   const [images, setImages] = useState([]);
//   const [step, setStep] = useState(1);
  
//   const [sensorData, setSensorData] = useState({ x: 0, y: 0, z: 0 });
//   const [capturedAreas, setCapturedAreas] = useState([]);

//   const capturePhoto = async () => {
//     if (camera.current) {
//       // Check if this area has been captured already
//       const isAreaAlreadyCaptured = capturedAreas.some((area) => {
//         const tolerance = 0.2; // Define the tolerance for comparison
//         return (
//           Math.abs(area.x - sensorData.x) < tolerance &&
//           Math.abs(area.y - sensorData.y) < tolerance &&
//           Math.abs(area.z - sensorData.z) < tolerance
//         );
//       });

//       if (isAreaAlreadyCaptured) {
//         Alert.alert('Already Captured', 'This area has already been captured. Please move the camera.');
//         return;
//       }

//       try {
//         const photo = await camera.current.takePhoto();
//         setImages((prevImages) => [...prevImages, photo.path]);
//         console.log('Captured photo:', photo.path);

//         // Save the current gyroscope data as a new captured area
//         setCapturedAreas((prevAreas) => [
//           ...prevAreas,
//           { x: sensorData.x, y: sensorData.y, z: sensorData.z }
//         ]);

//       } catch (error) {
//         console.log('Error capturing photo:', error);
//       }
//     }
//   };

//   const stopPanoramaCapture = () => {
//     if (images.length > 0) {
//       setShowCamera(false);
//       setStep(2); // Move to the next step after capturing
//     } else {
//       Alert.alert('No Images Captured', 'Please try again.');
//     }
//   };

//   const handleNext = () => {
//     if (images.length > 0) {
//       navigation.navigate('SnapShotScreen', {
//         images: images,
//         property_id: property_id,
//         label: label,
//       });
//     } else {
//       Alert.alert('Wait', 'Please click one or more images');
//     }
//   };


//   const [lastUpdate, setLastUpdate] = useState(0); // To track the last time sensor data was processed

//   useEffect(() => {
//     const updateInterval = 2000; // 500ms throttling interval

//     const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) => {
//       const now = Date.now();

//       // Check if enough time has passed since the last update
//       if (now - lastUpdate > updateInterval) {
//         setSensorData({ x, y, z, timestamp });
//         setLastUpdate(now); // Update the last update time
//         // console.log({ x, y, z, timestamp });
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => subscription.unsubscribe();
//   }, [lastUpdate]); // Re-run when lastUpdate changes

//   if (device == null) {
//     return <Text>Camera not available</Text>;
//   }

//   return (
//     <View style={CaptureStyles.container}>
//       {step === 1 && showCamera && (
//         <>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={showCamera}
//             photo={true}
//           />
//           <View style={CaptureStyles.topMessage}>
//             <Text style={{ textAlign: 'center', fontSize: 12 }}>
//               Try not to capture area which is already captured
//             </Text>
//           </View>
//           <View style={CaptureStyles.captureControls}>
//             <TouchableOpacity onPress={capturePhoto}>
//               <Ionicons name="camera-outline" size={50} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={stopPanoramaCapture}>
//               <Ionicons
//                 name="checkmark-done-circle"
//                 size={40}
//                 color={'#FE6D2B'}
//               />
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal style={CaptureStyles.thumbnailScroll}>
//             {images.map((uri, index) => (
//               <Image
//                 key={index}
//                 style={CaptureStyles.thumbnail}
//                 source={{ uri: `file://${uri}` }}
//               />
//             ))}
//           </ScrollView>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           {/* <MainHeader screenName="Finalize Images" /> */}
//           <ScrollView contentContainerStyle={CaptureStyles.imageGrid}>
//             {images.map((uri, index) => (
//               <Image
//                 key={index}
//                 style={CaptureStyles.gridImage}
//                 source={{ uri: `file://${uri}` }}
//               />
//             ))}
//           </ScrollView>
//           <TouchableOpacity style={{ position: 'absolute', bottom: 20, alignItems: 'center' }}>
//             <TouchableOpacity
//               style={CaptureStyles.nextButton}
//               onPress={handleNext}>
//               <Text style={CaptureStyles.buttonText}>Let's Go</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={CaptureStyles.secondaryButton}
//               onPress={() => {
//                 setStep(1);
//                 setShowCamera(true);
//               }}>
//               <Text style={CaptureStyles.secondaryButtonText}>Take More</Text>
//             </TouchableOpacity>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// }

// export default CapturePanoramaScreen;



// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { Camera, getCameraDevice } from 'react-native-vision-camera';
// import { gyroscope } from 'react-native-sensors';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MainHeader from '../../../component/AppHeaderV2.jsx';
// // import { height, width } from '../Globals/getDimensions';
// // import { height,width } from '../Globals/getDimensions';
// import { width,height } from '../Globals/getDImensions';
// import CaptureStyles from './CaptureStyles';

// function CapturePanoramaScreen({ route }) {
//   const { property_id } = route.params;
//   const { label } = route.params;

//   const navigation = useNavigation();
//   const camera = useRef(null);
//   const devices = Camera.getAvailableCameraDevices();
//   const device = getCameraDevice(devices, 'back');
//   const [showCamera, setShowCamera] = useState(true);
//   const [images, setImages] = useState([]);
//   const [capturedAreas, setCapturedAreas] = useState([]); // Store captured areas
//   const [step, setStep] = useState(1);
  
//   // Sensor state for gyroscope
//   const [sensorData, setSensorData] = useState({ x: 0, y: 0, z: 0 });
//   const [lastOrientation, setLastOrientation] = useState(null); // Track last orientation

//   // Gyroscope subscription for orientation tracking
//   // useEffect(() => {
//   //   const subscription = gyroscope.subscribe(({ x, y, z }) => {
//   //     setSensorData({ x, y, z });
//   //   });

//   //   // Cleanup the subscription when the component unmounts
//   //   return () => subscription.unsubscribe();
//   // }, []);

//   const [lastUpdate, setLastUpdate] = useState(0); // To track the last time sensor data was processed

//   useEffect(() => {
//     const updateInterval = 2500; // 500ms throttling interval

//     const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) => {
//       const now = Date.now();
      
//       // Check if enough time has passed since the last update
//       if (now - lastUpdate > updateInterval) {
//         setSensorData({ x, y, z, timestamp });
//         setLastUpdate(now); // Update the last update time
//         console.log({ x, y, z, timestamp });
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => subscription.unsubscribe();
//   }, [lastUpdate]); //

//   // Function to calculate the difference between two sets of sensor data
//   const calculateDifference = (data1, data2) => {
//     const deltaX = Math.abs(data1.x - data2.x);
//     const deltaY = Math.abs(data1.y - data2.y);
//     const deltaZ = Math.abs(data1.z - data2.z);
//     return deltaX + deltaY + deltaZ; // Combined difference
//   };

//   // Capture photo function with overlap detection
//   const capturePhoto = async () => {
//     if (camera.current) {
//       // Check for overlap based on gyroscope data
//       if (lastOrientation) {
//         const difference = calculateDifference(sensorData, lastOrientation);

//         // If the difference is small, alert the user
//         if (difference < 0.5) { // You can adjust this threshold based on sensitivity
//           Alert.alert('Warning', 'You are trying to capture an area that overlaps with a previous capture. Please adjust the camera.');
//           return; // Stop the photo capture
//         }
//       }

//       try {
//         const photo = await camera.current.takePhoto();
//         setImages(prevImages => [...prevImages, photo.path]);
//         setCapturedAreas(prevAreas => [
//           ...prevAreas,
//           { id: prevAreas.length, photo: photo.path } // Store captured area with unique ID
//         ]);
//         setLastOrientation({ ...sensorData }); // Store the current orientation as the last captured orientation
//       } catch (error) {
//         console.log('Error capturing photo:', error);
//       }
//     }
//   };

//   const stopPanoramaCapture = () => {
//     if (images.length > 0) {
//       setShowCamera(false);
//       setStep(2); // Move to the next step after capturing
//     } else {
//       Alert.alert('No Images Captured', 'Please try again.');
//     }
//   };

//   const handleNext = () => {
//     if (images.length > 0) {
//       navigation.navigate('SnapShotScreen', {
//         images: images,
//         property_id: property_id,
//         label: label,
//       });
//     } else {
//       Alert.alert('Wait', 'Please click one or more images');
//     }
//   };

//   if (device == null) {
//     return <Text>Camera not available</Text>;
//   }

//   return (
//     <View style={CaptureStyles.container}>
//       {step === 1 && showCamera && (
//         <>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={showCamera}
//             photo={true}
//           />

//           {/* Render red overlay for captured areas */}
//           {capturedAreas.map(area => (
//             <View key={area.id} style={styles.overlay} />
//           ))}

//           <View style={CaptureStyles.topMessage}>
//             <Text style={{ textAlign: 'center', fontSize: 12 }}>
//               Try not to capture an area that is already captured
//             </Text>
//           </View>
//           <View style={CaptureStyles.captureControls}>
//             <TouchableOpacity>
//               <Ionicons name="camera-outline" size={50} color="transparent" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={capturePhoto}>
//               <Ionicons name="camera-outline" size={50} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={stopPanoramaCapture}>
//               <Ionicons
//                 name="checkmark-done-circle"
//                 size={40}
//                 color={'#FE6D2B'}
//               />
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal style={CaptureStyles.thumbnailScroll}>
//             {images.map((uri, index) => (
//               <Image
//                 key={index}
//                 style={CaptureStyles.thumbnail}
//                 source={{ uri: `file://${uri}` }}
//               />
//             ))}
//           </ScrollView>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           {/* <MainHeader screenName="Finalize Images" /> */}
//           <ScrollView contentContainerStyle={CaptureStyles.imageGrid}>
//             {images.map((uri, index) => (
//               <Image
//                 key={index}
//                 style={CaptureStyles.gridImage}
//                 source={{ uri: `file://${uri}` }}
//               />
//             ))}
//           </ScrollView>
//           <TouchableOpacity
//             style={{ position: 'absolute', bottom: 20, alignItems: 'center' }}>
//             <TouchableOpacity
//               style={CaptureStyles.nextButton}
//               onPress={handleNext}>
//               <Text style={CaptureStyles.buttonText}>Let's Go</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={CaptureStyles.secondaryButton}
//               onPress={() => {
//                 setStep(1);
//                 setShowCamera(true);
//               }}>
//               <Text style={CaptureStyles.secondaryButtonText}>
//                 Take More
//               </Text>
//             </TouchableOpacity>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// }

// // Styles for the overlay
// const styles = StyleSheet.create({
//   overlay: {
//     position: 'absolute',
//     backgroundColor: 'rgba(255, 0, 0, 0.3)', // Light red background
//     // Set the dimensions and position according to the captured area
//     top: 0, // Adjust as needed
//     left: 0, // Adjust as needed
//     width: width, // Full width, adjust as needed for the overlay size
//     height: height / 2, // Adjust height as needed for the overlay size
//   },
// });

// export default CapturePanoramaScreen;



import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import { gyroscope } from 'react-native-sensors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { height, width } from '../Globals/getDImensions';
import CaptureStyles from './CaptureStyles';
import { useNavigation } from '@react-navigation/native';
import Capture_Guide_one from './CaptiureGuides.js/Guide_one';
import Guide_two from './CaptiureGuides.js/Guide_two';

function CapturePanoramaScreen({ route }) {
  const { property_id, label } = route.params;
  const camera = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, 'back');
  const navigation = useNavigation()

  const [showCamera, setShowCamera] = useState(true);
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);
  const [capturedZones, setCapturedZones] = useState([]);
  const [currentGyroData, setCurrentGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [isWithinCapturedZone, setIsWithinCapturedZone] = useState(false);

  const [guide, setGuide] = useState(1);
  // Gyroscope subscription to track camera movement

  

  const [lastUpdate, setLastUpdate] = useState(0); // To track the last time sensor data was processed

  useEffect(() => {
    const updateInterval = 1500; // 500ms throttling interval

    const subscription = gyroscope.subscribe(({ x, y, z }) => {
      const now = Date.now();
      if (now - lastUpdate > updateInterval) {
        setLastUpdate(now); // Update the last update time

      setCurrentGyroData({ x, y, z });

      // Check if the current gyroscope data falls within any captured zones
      const isCaptured = capturedZones.some(zone => {
        return (
          Math.abs(zone.x - x) < 0.2 &&
          Math.abs(zone.y - y) < 0.2 &&
          Math.abs(zone.z - z) < 0.2
        );
      });

      setIsWithinCapturedZone(isCaptured);
    }
    });

    return () => subscription.unsubscribe();
  }, [capturedZones,lastUpdate]);

  const capturePhoto = async () => {
    if (camera.current && !isWithinCapturedZone) {
      try {
        const photo = await camera.current.takePhoto();
        setImages(prevImages => [...prevImages, photo.path]);

        // Save the current gyroscope data as a captured zone
        setCapturedZones(prevZones => [...prevZones, { ...currentGyroData }]);

        console.log('Captured photo:', photo.path);
      } catch (error) {
        console.log('Error capturing photo:', error);
      }
    } else {
      Alert.alert('Already Captured', 'You have already captured this area!');
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
    if (images.length > 0) {
      navigation.navigate('SnapShotScreen', {
        images: images,
        property_id: property_id,
        label: label,
      });
    } else {
      Alert.alert('Wait', 'Please click one or more images');
    }
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

          {/* Render the red overlay if within a captured zone */}
          {isWithinCapturedZone && (
            <View style={styles.redOverlay} />
          )}

          <View style={CaptureStyles.captureControls}>
            <TouchableOpacity onPress={capturePhoto}>
              <Ionicons name="camera-outline" size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={stopPanoramaCapture}>
              <Ionicons
                name="checkmark-done-circle"
                size={40}
                color={'#FE6D2B'}
              />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={CaptureStyles.thumbnailScroll}>
            {images.map((uri, index) => (
              <Image
                key={index}
                style={CaptureStyles.thumbnail}
                source={{ uri: `file://${uri}` }}
              />
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
              <Image
                key={index}
                style={CaptureStyles.gridImage}
                source={{ uri: `file://${uri}` }}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 20, alignItems: 'center' }}>
            <TouchableOpacity
              style={CaptureStyles.nextButton}
              onPress={handleNext}>
              <Text style={CaptureStyles.buttonText}>Let's Go</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={CaptureStyles.secondaryButton}
              onPress={() => {
                setStep(1);
                setShowCamera(true);
              }}>
              <Text style={CaptureStyles.secondaryButtonText}>Take More</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </>
      )}
      {
        guide === 1 &&
      <Capture_Guide_one
      visible={true}
      onClose={()=> setGuide(2)}
      />
    }
   {
        guide === 2 &&
       <Guide_two
      visible={true}
      onClose={()=> setGuide(3)}
      />
   }
    </View>
  );
}

const styles = StyleSheet.create({
  redOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // Light red, semi-transparent
  },
});

export default CapturePanoramaScreen;
