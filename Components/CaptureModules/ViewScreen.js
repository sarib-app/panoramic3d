
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { width } from '../Globals/getDImensions';
import ViewPanormaicModal from './ViewPanormaicModal';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const ViewScreen = ({route}) => {
const {images} = route.params
const [index,setIndex]=useState(0)


function onIndexChange(){
  if(index+1 === images.length){
    setIndex(0)
  }else{
    setIndex(index+1)
  }
}
  return (
    <View style={styles.container}>
      {/* <WebView
      javaScriptEnabled={true}
        source={{ uri: 'https://360panoramic.netlify.app/' }} // Replace with your deployed URL
        style={styles.webview}
      /> */}
      {
        images && 
        <>
      <ViewPanormaicModal 
      uri={`https://realestate3d.netlify.app/?url=${images[index]?.['3d_images'][0]?.url}`}
      />
      <View
      style={styles.labelContaiuner}
      >
        <Text style={styles.labelText}>
          {images[index]?.['3d_images'][0]?.room_label}
        </Text>
      </View>
      <TouchableOpacity
      style={styles.NxtButton}
      onPress={()=> onIndexChange()}
      >
        <Text style={styles.NxtButton_txt}>
          Next
        </Text>
      </TouchableOpacity> 
      </>

      }

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:"center"
  },
  webview: {
    flex: 1,
  },
  labelContaiuner:{
    backgroundColor:"rgba(0,0,0,0.6)",
    paddingVertical:10,
    // paddingHorizontal:80,
    width:width/2,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    position:"absolute",
    alignSelf:"center",
    top:50
  },
  labelText:{
    color:"white"
  },
  NxtButton:{
    backgroundColor:"#FE6D2B",
    // paddingVertical:10,
    height:70,width:70,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:1000,
    position:"absolute",
    alignSelf:"center",

    bottom:50
  },
  NxtButton_txt:{
    color:"white"
  }
});

export default ViewScreen;

