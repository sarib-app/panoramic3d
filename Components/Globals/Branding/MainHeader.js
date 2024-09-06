// components/MainHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../../assets/images/logo.png'
import { width } from '../getDImensions';
const MainHeader = ({ screenName }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        {/* <MaterialIcons name="menu" size={24} color="black" /> */}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{screenName}</Text>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingTop:40
  },
  headerTitle: {
    color: '#101828',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default MainHeader;
