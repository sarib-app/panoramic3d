import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert, TextInput } from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainHeader from '../Globals/Branding/MainHeader';
import { height, width } from '../Globals/getDImensions';
import { uploadPanoramicImage } from '../Global/Calls/Api_Calling';
import SnapShotStyles from './SnapShotStyles';

function SnapShotScreen({route}) {
    const {images}= route.params
    const {label}= route.params

  const navigation = useNavigation()
  const [order,setOrder]=useState("")
  const viewShotRef = useRef(null);
  const [loading,setLoading] =useState(false)
 

  const saveCapturedImages = async () => {
    setLoading(true)
    try {
      const uri = await captureRef(viewShotRef, {
        format: 'jpg',
        quality: 0.8,
      });
      console.log(uri);
      console.log('Panorama saved to', uri);
      const res = await uploadPanoramicImage(uri,order,label)
      if(res){
        if(res?.error){
          Alert.alert("Error",res?.error)
        }
        else{
          Alert.alert("Success","Panormaic picture has been added please add more now!")
          navigation.navigate("HomeScreen")
        }
      }
      // use this uri as image and save it to panormaic api, call the api here !
    } catch (error) {
      console.error('Error saving panorama', error);
    }
    finally{
      setLoading(false)
    }
  
  };
  return (
    <View style={SnapShotStyles.container}>

        <View
        style={{alignItems:"center"}}
        >
          {/* <Text style={SnapShotStyles.title}>Save your tour for Room1</Text> */}
          <MainHeader 
          screenName={"Save Progress"}
          />
                  <Text style={SnapShotStyles.description}>
                    you are about to save panoramic images for your one room or area. please add images for all rooms and complete the tour.
                </Text>

                <View style={SnapShotStyles.box}>
                    <Text style={SnapShotStyles.boxTitle}>Room 1</Text>
                    <Text style={SnapShotStyles.boxBody}>
                        Room 1 is the label for the area under which you are adding panoramic images.
                    </Text>
                </View>
                
                <View style={SnapShotStyles.box}>
                    <Text style={SnapShotStyles.boxTitle}>Add Order</Text>
                    <Text style={SnapShotStyles.boxBody}>
                        Please add orders in sequence so that in 3D-tour you can navigate in between rooms easily.
                    </Text>
                </View>
         <View
         style={{borderBottomColor:"#344054",borderBottomWidth:0.5,width:width/1.2,height:50}}
         >
    <TextInput
          value={order}
          onChangeText={(e)=> setOrder(e)}
          placeholder='Please add room order here..'
          style={{flex:1,color:"#344054",fontSize:12}}
          placeholderTextColor={"#344054"}
          />
         </View>
      
          <ViewShot ref={viewShotRef} style={SnapShotStyles.viewShot} options={{ format: 'jpg', quality: 0.9 }}>
            <ScrollView horizontal style={SnapShotStyles.scrollView}>
              {images.map((uri, index) => (
                <Image key={index} style={SnapShotStyles.image} source={{ uri: `file://${uri}` }} />
              ))}
            </ScrollView>
          </ViewShot>
          <TouchableOpacity style={SnapShotStyles.nextButton} onPress={saveCapturedImages}>
            <Text style={SnapShotStyles.buttonText}>{loading ? "loading":"Save and Proceed"}</Text>
          </TouchableOpacity>
        </View>
     
    </View>
  );
}


export default SnapShotScreen;
