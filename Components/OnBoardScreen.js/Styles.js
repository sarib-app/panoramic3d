import {
    StyleSheet,
   Dimensions
  } from 'react-native'
// import { Divider } from 'react-native-paper';
import { width, height } from '../Globals/getDImensions';
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  background_layer: {
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  container: {
    width: width * 0.9,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: height * 0.15
  },
  logo: {
    width: width * 0.2,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: height * 0.01,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: height * 0.08,
  },
  description: {
    fontSize: 14,
    color: '#DDDDDD',
    textAlign: 'center',
    width: width / 1.7,
    marginBottom: height * 0.12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: width * 0.045,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    transform: [{ rotate: '-45deg' }],
  },
});
  
  export default styles