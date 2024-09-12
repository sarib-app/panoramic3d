import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import MainHeader from '../Globals/Branding/MainHeader';
import styles from './Styles';
const PropertyDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { property } = route.params;  // Destructure the passed property details

  const handleAddPanoramic = () => {
    // Navigate to the add panoramic screen
navigation.navigate("CaptureTourScreen",{property_id:property.property_id})

// navigation.navigate("AddFloorScreen",{property_id:property.property_id})

  };

  const handleStart3DTour = () => {
    // Navigate to start 3D tour screen
navigation.navigate("ImageGridScreen",{panoramic_images:property.panoramic_images})
};

  return (
    <View style={styles.container}>
      {/* Header */}
      <MainHeader screenName="Property Details" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Property Image */}
        <Image
          source={{ uri: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg" }} 
          style={styles.propertyImage}
        />

        {/* Property Name and Price */}
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyName}>{property?.name}</Text>
          <Text style={styles.propertyPrice}>${property?.price.toLocaleString()}</Text>
        </View>

        {/* Property Details */}
        <View style={styles.propertyDetails}>
          <Text style={styles.propertyAddress}>{property?.address}</Text>
          <Text style={styles.propertyDescription}>{property?.description}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Beds: </Text>
            <Text style={styles.infoValue}>{property?.beds}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Baths: </Text>
            <Text style={styles.infoValue}>{property?.baths}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Size: </Text>
            <Text style={styles.infoValue}>{property?.size} Sqft</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Built-in: </Text>
            <Text style={styles.infoValue}>{property?.built_in}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
          
          style={styles.button} onPress={handleAddPanoramic}>
            <Text style={styles.buttonText}>Add Panoramic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleStart3DTour}>
            <Text style={styles.buttonText}>Start 3D Tour</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};



export default PropertyDetailsScreen;
