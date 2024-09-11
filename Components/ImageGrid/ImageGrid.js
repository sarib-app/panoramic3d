import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../Globals/Branding/MainHeader';

const { width, height } = Dimensions.get('window');

const ImageGridScreen = ({ route }) => {
  const { panoramic_images } = route.params; // Array of images
  const navigation = useNavigation();
  console.log(panoramic_images)
  const data = [
    {
        id:1
    }
  ]

  // Render each image in the grid
  const renderImageItem = ({ item }) => {
    const imageUrl = item?.['3d_images'][0]?.url;
    const roomLabel = item?.['3d_images'][0]?.room_label;
    

    return (
      <TouchableOpacity 
      onPress={()=> navigation.navigate("View")}
      style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.roomLabel}>{roomLabel}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        
        <MainHeader 
        screenName={"Panoramic Images"}
        />
  
            <FlatList
            data={panoramic_images}
            renderItem={renderImageItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2} // Display in grid format (2 columns)
            contentContainerStyle={styles.grid}
          />
        
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("View",{images:panoramic_images})} // Navigate to CaptureTourScreen
        >
          <Text style={styles.primaryButtonText}>Begin your 3D tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:height,
    width:width,
    backgroundColor: '#FFFFFF',
  },
  grid: {
    paddingVertical: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // flex: 1,
    paddingBottom:10,
    margin: 5,
    width:width/2.5,
    // height:200,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:"#F0F0F0",
    borderRadius: 8,

  },
  image: {
    width: width * 0.4,
    height: height * 0.2,
    borderRadius: 8,
  },
  roomLabel: {
    marginTop: 5,
    fontSize: 13,
    color: '#344054',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  primaryButton: {
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.25,
    borderRadius: 8,
  },
  primaryButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ImageGridScreen;
