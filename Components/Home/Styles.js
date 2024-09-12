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
  scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
  },
  welcomeContainer: {
      width: width * 0.9,
      borderRadius: 8,
      marginTop: height * 0.03,
  },
  welcomeText: {
      fontSize: 13,
      color: '#344054',
      textAlign: 'center',
      fontWeight: '400',
  },
  box: {
      width: width * 0.9,
      backgroundColor: 'white',
      borderRadius: 12,
      marginTop: height * 0.02,
      elevation: 2,
      shadowColor: "black",
      alignItems: 'center',
  },
  boxInner: {
      width: width * 0.9,
      backgroundColor: 'rgba(254, 109, 43, 0.07)',
      borderRadius: 12,
      padding: 15,
      alignItems: 'center',
  },
  boxLogo: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginBottom: height * 0.01,
  },
  boxTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: height * 0.02,
      color: "#001659",
  },
  boxDescription: {
      fontSize: 12,
      color: '#344054',
      fontWeight: "400",
      textAlign: 'center',
      marginBottom: height * 0.02,
  },
  boxButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#009721',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
  },
  boxButtonText: {
      fontSize: 12.5,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginRight: 10,
  },
  buttonIcon: {
      transform: [{ rotate: '-45deg' }],
  },
  resumeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FE6D2B',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: height * 0.05,
  },
  resumeButtonText: {
      fontSize: 12.5,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginRight: 10,
  },
});
  export default styles