
import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

  const ViewStyles = StyleSheet.create({ 
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
  })
  export default ViewStyles