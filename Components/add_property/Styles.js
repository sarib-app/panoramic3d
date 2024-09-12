import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';

  const styles = StyleSheet.create({ 
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        paddingVertical: height * 0.02,
      },
      description: {
        marginVertical: height * 0.02,
        fontSize: 13,
        color: '#344054',
        fontWeight: '400',
      },
      input: {
        width: width * 0.9,
        height: height * 0.06,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: height * 0.01,
        backgroundColor: '#F9FAFB',
      },
      submitButton: {
        backgroundColor: '#FE6D2B',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.2,
        borderRadius: 8,
        marginTop: height * 0.03,
      },
      submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      }
  })
  export default styles