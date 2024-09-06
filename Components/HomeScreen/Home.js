// // src/screens/HomeScreen.js
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Real Estate 360</Text>
//       <Button
//         title="Capture Panoramic Image"
//         onPress={() => navigation.navigate('Capture')}
//       />
//       <Button
//         title="View Panoramic Images"
//         onPress={() => navigation.navigate('View')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.2,
          friction: 2,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 2,
          tension: 80,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to e-estate selling platform.</Text>
      <Text style={styles.description}>We are building a futuristic 3D work for real estate agencies to sell and buy property online.</Text>
      <Animated.View style={[styles.buttonContainer, animatedStyle]}>
        <TouchableOpacity
          style={[styles.button, styles.createButton]}
          onPress={() => navigation.navigate('Capture')}
        >
          <Text style={styles.buttonText}>Create 360 Images</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.buttonContainer, animatedStyle]}>
        <TouchableOpacity
          style={[styles.button, styles.viewButton]}
          onPress={() => navigation.navigate('View')}
        >
          <Text style={styles.buttonText}>View Your Images</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    color: '#1C1C1C',
    // marginBottom: 40,
    fontWeight: 'bold',
    marginTop:100,
    textAlign:"center",
    marginHorizontal:8,

  },
  description: {
    fontSize: 14,
    color: '#1C1C1C',
    marginBottom: 40,
    fontWeight: '400',
    marginHorizontal:8,
    // marginTop:100,
    textAlign:"center"
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  createButton: {
    backgroundColor: '#61dafb',
  },
  viewButton: {
    backgroundColor: '#21a0f6',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
