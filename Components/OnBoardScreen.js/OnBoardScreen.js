// import React, { useEffect, useRef } from 'react';
// import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';
// import { width, height } from '../Globals/getDImensions';
// import { MaterialIcons } from 'react-native-vector-icons';
// import logo from '../../assets/images/logo.png';
// import bgimage from '../../assets/images/bgimage.jpeg';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
// // import MockUp from './choose/MockUpscreen';

// export default function OnBoardScreen (){
//   const navigation = useNavigation();
//   const slideAnim = useRef(new Animated.Value(-height)).current; // Initial slide-down effect
//   const opacityAnim = useRef(new Animated.Value(0)).current;
//   const slideOutAnim = useRef(new Animated.Value(0)).current; // For scroll-up animation
// const focused = useIsFocused()
//   useEffect(() => {
//     // Initial slide-down and fade-in effect
//     Animated.parallel([
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacityAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [focused]);

//   const handleNavigation = () => {
//     // Animate content to slide up
//     Animated.parallel([
//       Animated.timing(slideOutAnim, {
//         toValue: -height,
//         duration: 600,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacityAnim, {
//         toValue: 0,
//         duration: 600,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       // Navigate to the next screen after the animation is complete
//       navigation.navigate('HomeScreen');
//     });
//   };

//   return (
    // <ImageBackground
    //   source={bgimage}
    //   style={styles.background}
    // >
    //   <View style={styles.background_layer}>
    //     <Animated.View
    //       style={[
    //         styles.container,
    //         {
    //           transform: [{ translateY: slideAnim }],
    //           opacity: opacityAnim,
    //         },
    //       ]}
    //     >
    //       <Image
    //         source={logo}
    //         style={styles.logo}
    //       />
    //       <Text style={styles.title}>Add 3D tour in your listing to make it standout</Text>
    //       <Text style={styles.description}>
    //         Boost your listing's appeal by including a 3D tour, which can significantly enhance its attractiveness to potential buyers.
    //       </Text>
    //       <TouchableOpacity 
    //         onPress={handleNavigation}
    //         style={styles.button}
    //       >
    //         <Text style={styles.buttonText}>Get Started</Text>
    //         <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" style={styles.icon} />
    //       </TouchableOpacity>
    //     </Animated.View>
    //   </View>
    // </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     width: width,
//     height: height,
//     alignItems: 'center',
//   },
//   background_layer: {
//     width: width,
//     height: height,
//     alignItems: 'center',
//     backgroundColor: "rgba(0,0,0,0.6)"
//   },
//   container: {
//     width: width * 0.9,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop: height * 0.15
//   },
//   logo: {
//     width: width * 0.2,
//     height: height * 0.2,
//     resizeMode: 'contain',
//     marginBottom: height * 0.01,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: height * 0.08,
//   },
//   description: {
//     fontSize: 14,
//     color: '#DDDDDD',
//     textAlign: 'center',
//     width: width / 1.7,
//     marginBottom: height * 0.12,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FE6D2B',
//     paddingVertical: height * 0.015,
//     paddingHorizontal: width * 0.1,
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: width * 0.045,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   icon: {
//     transform: [{ rotate: '-45deg' }],
//   },
// });
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
import logo from '../../assets/images/logo.png';
import bgimage from '../../assets/images/bgimage.jpeg';
import { useIsFocused, useNavigation } from '@react-navigation/native';
// import MockUp from './choose/MockUpscreen';

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