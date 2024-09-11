import { Alert } from "react-native";

// apiService.js
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyNjA1NzAzNiwianRpIjoiYzE2NmI2N2QtMTJhYi00ZTExLWJmZTEtNGY4MTY3ZmY2YzZlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InNhcmlia2hhbm44NEBnbWFpbC5jb20iLCJuYmYiOjE3MjYwNTcwMzYsImNzcmYiOiIyZTY5ZjNjYS1lMThkLTRhYzQtOGY1Yi0zMDZkMzFjOGY0MjIiLCJleHAiOjE3MjYwNjA2MzZ9.FkqsLcmZJNENKm7uiv7iNvB8scSz3VOMGSz22l7wIIc"
export const fetchProperties = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token); // Place the full token here
    // myHeaders.append("Cookie", "access_token_cookie=eyJhb...");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    } ;
  
    try {
      const response = await fetch("https://papi.airebrokers.com/api/user/properties/list", requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching properties:', error);
      return [];
    }
  };
  
  // Create a global function for the API call
  export const uploadPanoramicImage = async (imageUri, order,label) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);
  
    const formData = new FormData();
    formData.append("property_id", "66e0111a04065f0d3edf873f");
    formData.append("panoramic_image", {
      uri: imageUri,
      type: 'image/jpeg', 
      name: 'panoramic_image.jpg' // Ensure to add an appropriate file name and extension
    });
    formData.append("property_version", order);
    formData.append("order", "1");
    formData.append("room_label", label);
    formData.append("geo_location_latitude", "50.67");
    formData.append("geo_location_longitude", "99.90");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };
  
    try {
      const response = await fetch("https://papi.airebrokers.com/api/user/properties/panoramic_images", requestOptions);
      const result = await response.json();
      console.log('API response:', result);
      return result
      // Alert.alert('Success', 'Panoramic image uploaded successfully');
    } catch (error) {
      console.error('Error uploading panoramic image:', error);
      return null
      Alert.alert('Error', 'Failed to upload panoramic image');
    }
  };
  
// Example usage of the global function:

