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
    paddingHorizontal: width * 0.05,
    alignItems:'center'
  },
  description: {
    // fontSize: 16,
    // color: '#344054',
    marginVertical: height * 0.02,
    marginTop: height * 0.04,
    fontSize: 13,
    color: '#344054',
    // textAlign: 'center',
    fontWeight:'400',
  },
  listWRapper:{
    width:width/1.1,
    height:height/1.4,

  },
  propertyBox: {
    width: '100%',
    height: height * 0.3,
    marginBottom: height * 0.03,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent:'flex-end',
    elevation:2,
    shadowColor:"black"
  },
  propertyDetailsContainer: {
    // flex: 1,
    // height:"40%",
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: width * 0.04,
    // paddingBottom:52,


  },
  price: {
    fontSize: 21,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  propertyDetails: {
    fontSize: 12.79,
    color: '#FFFFFF',
    marginBottom: height * 0.01,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  infoText: {
    fontSize: 12.79,
    color: '#FFFFFF',
    alignItems:'center',
    textAlign:'center'
  },
  exitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FE6D2B',
    borderColor:'#FE6D2B',
    borderWidth:1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.12,
    marginTop:height * 0.015,

    borderRadius: 8,
  },
  exitButtonText: {
    fontSize: 16,
    color: '#FE6D2B',
    fontWeight: 'bold',
    // marginRight: 10,
  },
});
  
  export default styles