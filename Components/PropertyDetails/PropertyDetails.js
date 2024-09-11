import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import MainHeader from '../Globals/Branding/MainHeader';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: height * 0.05,
  },
  propertyImage: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 15,
    marginTop: height * 0.02,
    overflow: 'hidden',
  },
  propertyInfo: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#344054',
  },
  propertyPrice: {
    fontSize: 18,
    color: '#FE6D2B',
    fontWeight: 'bold',
    marginTop: height * 0.01,
  },
  propertyDetails: {
    width: width * 0.9,
    marginTop: height * 0.03,
    padding: width * 0.05,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  propertyAddress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginBottom: height * 0.02,
  },
  propertyDescription: {
    fontSize: 12,
    color: '#344054',
    marginBottom: height * 0.02,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  infoLabel: {
    fontSize: 13,
    color: '#344054',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 13,
    color: '#344054',
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.03,
    width: width * 0.9,
  },
  button: {
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.015,
    paddingHorizontal: width /12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PropertyDetailsScreen;
