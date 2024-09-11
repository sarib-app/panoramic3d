import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import MainHeader from '../Globals/Branding/MainHeader';
// import { apiCall } from '../utils/api';  // Import the global API function

const AddPropertyScreen = () => {
  const [propertyData, setPropertyData] = useState({
    property_type: 'Single_Family',
    seller_address: '',
    name: '',
    status: 'For Sale',
    construction: '',
    state: '',
    city: '',
    latitude: '',
    longitude: '',
    beds: '',
    baths: '',
    price: '',
    size: '',
    description: '',
  });

  const handleChange = (name, value) => {
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = async () => {
    // try {
    //   const url = "https://papi.airebrokers.com/api/user/properties/add/property-type-selection";
    //   const result = await apiCall(url, "POST", propertyData);
    //   console.log('Property added successfully:', result);
    // } catch (error) {
    //   console.error('Error adding property:', error);
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MainHeader screenName="Add Property" />

      <Text style={styles.description}>Fill in the details below to add a new property:</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Property Name"
        value={propertyData.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Seller Address"
        value={propertyData.seller_address}
        onChangeText={(text) => handleChange('seller_address', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="City"
        value={propertyData.city}
        onChangeText={(text) => handleChange('city', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="State"
        value={propertyData.state}
        onChangeText={(text) => handleChange('state', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Price"
        keyboardType="numeric"
        value={propertyData.price}
        onChangeText={(text) => handleChange('price', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Beds"
        keyboardType="numeric"
        value={propertyData.beds}
        onChangeText={(text) => handleChange('beds', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Baths"
        keyboardType="numeric"
        value={propertyData.baths}
        onChangeText={(text) => handleChange('baths', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Size (sqft)"
        keyboardType="numeric"
        value={propertyData.size}
        onChangeText={(text) => handleChange('size', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Construction Material"
        value={propertyData.construction}
        onChangeText={(text) => handleChange('construction', text)}
      />

      <TextInput
            style={styles.input}
        placeholderTextColor={"grey"}
        placeholder="Description"
        multiline
        value={propertyData.description}
        onChangeText={(text) => handleChange('description', text)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Property</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
  description: {
    marginVertical: height * 0.02,
    fontSize: 13,
    color: '#344054',
    fontWeight: '400',
  },
  input: {
    width: width * 0.9,
    height: height * 0.06,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: height * 0.01,
    backgroundColor: '#F9FAFB',
  },
  submitButton: {
    backgroundColor: '#FE6D2B',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.2,
    borderRadius: 8,
    marginTop: height * 0.03,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddPropertyScreen;
