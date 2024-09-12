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
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: height * 0.05,
  },
  propertyImage: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 15,
    marginTop: height * 0.02,
    overflow: 'hidden',
  },
  propertyInfo: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#344054',
  },
  propertyPrice: {
    fontSize: 18,
    color: '#FE6D2B',
    fontWeight: 'bold',
    marginTop: height * 0.01,
  },
  propertyDetails: {
    width: width * 0.9,
    marginTop: height * 0.03,
    padding: width * 0.05,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  propertyAddress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginBottom: height * 0.02,
  },
  propertyDescription: {
    fontSize: 12,
    color: '#344054',
    marginBottom: height * 0.02,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  infoLabel: {
    fontSize: 13,
    color: '#344054',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 13,
    color: '#344054',
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.03,
    width: width * 0.9,
  },
  button: {
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width /12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
  
  export default styles