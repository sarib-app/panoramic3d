
import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

  const SnapShotStyles = StyleSheet.create({ 

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
  })
  export default SnapShotStyles