import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
  },
  content: {
      paddingVertical: width * 0.05,
      alignItems:"center"
  },
  description: {
      fontSize: 13,
      color: '#344054',
      marginBottom: height * 0.03,
      lineHeight: 22,
      width:width/1.12
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
  buttonContainer: {
      marginTop: height * 0.03,
      alignItems: 'center',
  },
  primaryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FE6D2B',
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.1,
      borderRadius: 8,
      marginBottom: height * 0.02,
  },
  primaryButtonText: {
      fontSize: 13,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginRight: 10,
  },
  secondaryButton: {
      borderWidth: 2,
      borderColor: '#FE6D2B',
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.1,
      borderRadius: 8,
  },
  secondaryButtonText: {
      fontSize: 13,
      color: '#FE6D2B',
      fontWeight: 'bold',
  },
});
  export default styles