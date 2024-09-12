
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
import logo from '../../assets/images/logo.png';
import bgimage from '../../assets/images/bgimage.jpeg';
import { useIsFocused, useNavigation } from '@react-navigation/native';
// import MockUp from './choose/MockUpscreen';
import styles from './Styles';

function OnBoardScreen(){


    const navigation = useNavigation();
    const slideAnim = useRef(new Animated.Value(-height)).current; // Initial slide-down effect
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const slideOutAnim = useRef(new Animated.Value(0)).current; // For scroll-up animation
  const focused = useIsFocused()
    useEffect(() => {
      // Initial slide-down and fade-in effect
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();
    }, [focused]);
  
    const handleNavigation = () => {
      // Animate content to slide up
      Animated.parallel([
        Animated.timing(slideOutAnim, {
          toValue: -height,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate to the next screen after the animation is complete
        navigation.navigate('HomeScreen');
      });
    };
  
    return(

        <View>
                <ImageBackground
      source={bgimage}
      style={styles.background}
    >
      <View style={styles.background_layer}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY: slideAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Image
            source={logo}
            style={styles.logo}
          />
          <Text style={styles.title}>Add 3D tour in your listing to make it standout</Text>
          <Text style={styles.description}>
            Boost your listing's appeal by including a 3D tour, which can significantly enhance its attractiveness to potential buyers.
          </Text>
          <TouchableOpacity 
            onPress={handleNavigation}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            {/* <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" style={styles.icon} /> */}
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
        </View>
    )
}
export default OnBoardScreen


