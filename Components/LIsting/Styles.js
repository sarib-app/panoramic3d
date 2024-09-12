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
      padding: width * 0.05,
  },
  description: {
      fontSize: 13,
      color: '#344054',
      marginBottom: height * 0.02,
      lineHeight: 22,
  },
  addButton: {
      marginBottom: height * 0.02,
      alignSelf: 'flex-start',
  },
  addButtonText: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#344054',
  },
  listContainer: {
      marginTop: height * 0.02,
  },
  floorItem: {
      width: width * 0.9,
      paddingVertical: height * 0.02,
      borderBottomWidth: 0.59,
      borderBottomColor: '#D0D5DD',
      marginBottom: height * 0.02,
  },
  floorTitle: {
      fontSize: 13,
      color: '#344054',
      fontWeight:'300'
  },
});
  
  export default styles