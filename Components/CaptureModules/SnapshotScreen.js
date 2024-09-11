import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, Alert, TextInput } from 'react-native';
import { Camera, getCameraDevice } from 'react-native-vision-camera';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainHeader from '../Globals/Branding/MainHeader';
import { height, width } from '../Globals/getDImensions';
import { uploadPanoramicImage } from '../Global/Calls/Api_Calling';

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
    <View style={styles.container}>

        <View
        style={{alignItems:"center"}}
        >
          {/* <Text style={styles.title}>Save your tour for Room1</Text> */}
          <MainHeader 
          screenName={"Save Progress"}
          />
                  <Text style={styles.description}>
                    you are about to save panoramic images for your one room or area. please add images for all rooms and complete the tour.
                </Text>

                <View style={styles.box}>
                    <Text style={styles.boxTitle}>Room 1</Text>
                    <Text style={styles.boxBody}>
                        Room 1 is the label for the area under which you are adding panoramic images.
                    </Text>
                </View>
                
                <View style={styles.box}>
                    <Text style={styles.boxTitle}>Add Order</Text>
                    <Text style={styles.boxBody}>
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
      
          <ViewShot ref={viewShotRef} style={styles.viewShot} options={{ format: 'jpg', quality: 0.9 }}>
            <ScrollView horizontal style={styles.scrollView}>
              {images.map((uri, index) => (
                <Image key={index} style={styles.image} source={{ uri: `file://${uri}` }} />
              ))}
            </ScrollView>
          </ViewShot>
          <TouchableOpacity style={styles.nextButton} onPress={saveCapturedImages}>
            <Text style={styles.buttonText}>{loading ? "loading":"Save and Proceed"}</Text>
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
    marginRight: 0,
  },
  viewShot: {
    width: '100%',
    height: 200,
    marginTop:20
  },
  description: {
    fontSize: 13,
    color: '#344054',
    marginBottom: height * 0.03,
    lineHeight: 22,
    width:width/1.12,
    marginTop:10
},
box: {
  backgroundColor: '#F5F5F5',
  borderRadius: 10,
  width:width/1.1,
  padding: 15,
  marginBottom: height * 0.02,
},
boxTitle: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#001659',
  marginBottom: 8,
},
boxBody: {
  fontSize: 12.75,
  color: '#344054',
  fontWeight:'300'
},
nextButton: {
  // marginTop: 20
  // position:"absolute",
  marginVertical:height * 0.02,
  backgroundColor: '#FE6D2B',
  paddingVertical: height * 0.015,
  paddingHorizontal: width * 0.1,
  borderRadius: 8,

},
});

export default SnapShotScreen;
