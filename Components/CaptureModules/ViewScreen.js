
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { width } from '../Globals/getDImensions';
import ViewPanormaicModal from './ViewPanormaicModal';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewStyles from './Viewer';
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
    <View style={ViewStyles.container}>
      {/* <WebView
      javaScriptEnabled={true}
        source={{ uri: 'https://360panoramic.netlify.app/' }} // Replace with your deployed URL
        style={ViewStyles.webview}
      /> */}
      {
        images && 
        <>
      <ViewPanormaicModal 
      uri={`https://realestate3d.netlify.app/?url=${images[index]?.['3d_images'][0]?.url}`}
      />
      <View
      style={ViewStyles.labelContaiuner}
      >
        <Text style={ViewStyles.labelText}>
          {images[index                                                                                                                               ]?.['3d_images'][0]?.room_label}
        </Text>
      </View>
      <TouchableOpacity
      style={ViewStyles.NxtButton}
      onPress={()=> onIndexChange()}
      >
        <Text style={ViewStyles.NxtButton_txt}>
          Next
        </Text>
      </TouchableOpacity> 
      </>

      }

      </View>
  );
};

export default ViewScreen;

