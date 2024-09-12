import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height:height,
      width:width,
      backgroundColor: '#FFFFFF',
    },
    grid: {
      paddingVertical: height * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      // flex: 1,
      paddingBottom:10,
      margin: 5,
      width:width/2.5,
      // height:200,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor:"#F0F0F0",
      borderRadius: 8,
  
    },
    image: {
      width: width * 0.4,
      height: height * 0.2,
      borderRadius: 8,
    },
    roomLabel: {
      marginTop: 5,
      fontSize: 13,
      color: '#344054',
      textAlign: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      marginVertical: height * 0.02,
    },
    primaryButton: {
      backgroundColor: '#FE6D2B',
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.25,
      borderRadius: 8,
    },
    primaryButtonText: {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });
  
  export default styles