
// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// const ViewScreen = () => {


//   return (
//     <View style={styles.container}>
//       <WebView
//       javaScriptEnabled={true}
//         source={{ uri: 'https://360panoramic.netlify.app/' }} // Replace with your deployed URL
//         style={styles.webview}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webview: {
//     flex: 1,
//   },
// });

// export default ViewScreen;


import React from 'react';
import { View, StyleSheet, Image, PanResponder, Animated } from 'react-native';
import smaLLimAG from '../../assets/smallimg.jpg'
const ViewScreen = ({  }) => {
  const pan = React.useRef(new Animated.ValueXY()).current;
const imageUrl = ""
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        source={smaLLimAG }
        style={[styles.image, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ViewScreen;
