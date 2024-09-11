
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// import { TouchableOpacity } from 'react-native-gesture-handler';

const ViewPanormaicModal = ({uri}) => {


  return (

      <WebView
      javaScriptEnabled={true}
        source={{ uri: uri}} // Replace with your deployed URL
        style={styles.webview}
      />
    
  );
};

const styles = StyleSheet.create({
 
  webview: {
    flex: 1,
  },

});

export default ViewPanormaicModal;

