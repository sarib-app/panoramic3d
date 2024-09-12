import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

  const CaptureStyles = StyleSheet.create({ 
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
  })
  export default CaptureStyles