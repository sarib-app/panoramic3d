import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


import MainHeader from '../Globals/Branding/MainHeader';

import { fetchProperties } from '../Global/Calls/Api_Calling';
const data = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "$333,400",
        details: "2699 Green Valley, Highland Lake, Florida",
        sqft: "1,602",
        beds: "4",
        baths: "2"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "$420,000",
        details: "3400 Palm Grove, Sunset Beach, California",
        sqft: "2,200",
        beds: "3",
        baths: "3"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "$290,500",
        details: "1204 Maple Street, Oakwood, Georgia",
        sqft: "1,850",
        beds: "4",
        baths: "2"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
        cost: "$510,000",
        details: "752 Forest Lane, Pine Ridge, Oregon",
        sqft: "3,000",
        beds: "5",
        baths: "4"
    },
    {
        id: 5,
        url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
        cost: "$610,750",
        details: "9800 Hilltop View, Mountain View, Colorado",
        sqft: "2,800",
        beds: "4",
        baths: "3"
    }
];


const MyListingsScreen = () => {
  const navigation = useNavigation();
  const [properties, setProperties] = useState([]); // State for storing the fetched data
  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data); // Update state with the API data
    };
    getProperties();
  }, []);

  const handleExit = () => {
    // Navigate to another screen or exit the app
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("PropertyDetailsScreen",{property:item})}>
      <ImageBackground source={{ uri: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg" }} style={styles.propertyBox}>
        <View style={styles.propertyDetailsContainer}>
          <Text style={styles.price}>${item.price.toLocaleString()}</Text>
          <Text style={styles.propertyDetails}>
            {item.address || "No Address Available"}
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                {item.size || "N/A"} Sqft
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                {item.beds} Beds
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                {item.baths} Baths
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  // const handleExit = () => {
  //   // Navigate to another screen or exit the app
  // };

  // const renderItem = ({item}) => (
  //   <TouchableOpacity
  //   onPress={()=> navigation.navigate("AddFloorScreen")}
  //   >

  // <ImageBackground source={{uri:item.url}} style={styles.propertyBox}>
  //       <View style={styles.propertyDetailsContainer}>
  //         <Text style={styles.price}>{item.cost}</Text>
  //         <Text style={styles.propertyDetails}>
  //           {item.details}
  //         </Text>
  //         <View style={styles.infoRow}>
  //         <View style={styles.infoRow}>
  //             {/* <MaterialIcons name="square-foot" size={20} color="#FFFFFF" />  */}
  //           <Text style={styles.infoText}>
  //             {item.sqfts} Sqfts
  //           </Text>
  //           </View>
  //           <View style={styles.infoRow}>
  //           {/* <MaterialIcons name="bed" size={20} color="#FFFFFF" />  */}
  //        <Text style={styles.infoText}>
  //             {item.bed} Bed
  //           </Text>
  //        </View>
  //        <View style={styles.infoRow}>
  //        {/* <MaterialIcons name="bathtub" size={20} color="#FFFFFF" />  */}
  //        <Text style={styles.infoText}>
  //             {item.baths} Bath
  //           </Text>
  //        </View>
            
  //         </View>
  //       </View>
  //     </ImageBackground>
  //   </TouchableOpacity>

  // )

  return (
    <View style={styles.container}>
      {/* Header */}
      <MainHeader screenName="My Listings" />

      {/* Description */}
      <Text style={styles.description}>
     <Text style={{fontWeight:'bold'}}>
        Your properties are ready for a virtual 3D tour!{'/n'}
        </Text> 
        Choose a listing to get started:
      </Text>

      {/* First Property Box */}
      {/* Second Property Box */}
      <View style={styles.listWRapper}>
      <FlatList
          data={properties} // Use the fetched data
          renderItem={renderItem}
          keyExtractor={(item) => item.property_id} // Unique key for each item
        />
     </View>

      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
        <Text style={styles.exitButtonText}>Exit</Text>
        {/* <MaterialIcons name="exit-to-app" size={24} color="#001659" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.05,
    alignItems:'center'
  },
  description: {
    // fontSize: 16,
    // color: '#344054',
    marginVertical: height * 0.02,
    marginTop: height * 0.04,
    fontSize: 13,
    color: '#344054',
    // textAlign: 'center',
    fontWeight:'400',
  },
  listWRapper:{
    width:width/1.1,
    height:height/1.4,

  },
  propertyBox: {
    width: '100%',
    height: height * 0.3,
    marginBottom: height * 0.03,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent:'flex-end',
    elevation:2,
    shadowColor:"black"
  },
  propertyDetailsContainer: {
    // flex: 1,
    // height:"40%",
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: width * 0.04,
    // paddingBottom:52,


  },
  price: {
    fontSize: 21,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  propertyDetails: {
    fontSize: 12.79,
    color: '#FFFFFF',
    marginBottom: height * 0.01,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  infoText: {
    fontSize: 12.79,
    color: '#FFFFFF',
    alignItems:'center',
    textAlign:'center'
  },
  exitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FE6D2B',
    borderColor:'#FE6D2B',
    borderWidth:1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.12,
    marginTop:height * 0.015,

    borderRadius: 8,
  },
  exitButtonText: {
    fontSize: 16,
    color: '#FE6D2B',
    fontWeight: 'bold',
    // marginRight: 10,
  },
});

export default MyListingsScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { width, height } from '../Globals/getDImensions';
// import { useNavigation } from '@react-navigation/native';
// import MainHeader from '../Globals/Branding/MainHeader';
// // import { fetchProperties } from '../api/apiService';  // Import your API service
// import { fetchProperties } from '../Global/Calls/Api_Calling';
// const MyListingsScreen = () => {
//   const [properties, setProperties] = useState([]); // State for storing the fetched data
//   const navigation = useNavigation();

//   // Fetch the properties when the component mounts
//   useEffect(() => {
//     const getProperties = async () => {
//       const data = await fetchProperties();
//       setProperties(data); // Update state with the API data
//     };
//     getProperties();
//   }, []);

//   const handleExit = () => {
//     // Navigate to another screen or exit the app
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate("AddFloorScreen")}>
//       <ImageBackground source={{ uri: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg" }} style={styles.propertyBox}>
//         <View style={styles.propertyDetailsContainer}>
//           <Text style={styles.price}>${item.price.toLocaleString()}</Text>
//           <Text style={styles.propertyDetails}>
//             {item.address || "No Address Available"}
//           </Text>
//           <View style={styles.infoRow}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoText}>
//                 {item.size || "N/A"} Sqft
//               </Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoText}>
//                 {item.beds} Beds
//               </Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoText}>
//                 {item.baths} Baths
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <MainHeader screenName="My Listings" />

//       {/* Description */}
//       <Text style={styles.description}>
//         <Text style={{ fontWeight: 'bold' }}>
//           Your properties are ready for a virtual 3D tour!{'\n'}
//         </Text>
//         Choose a listing to get started:
//       </Text>

//       {/* Property List */}
//       <View style={styles.listWrapper}>
        // <FlatList
        //   data={properties} // Use the fetched data
        //   renderItem={renderItem}
        //   keyExtractor={(item) => item.property_id} // Unique key for each item
        // />
//       </View>

//       {/* Exit Button */}
//       <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
//         <Text style={styles.exitButtonText}>Exit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: width * 0.05,
//     alignItems: 'center',
//   },
//   description: {
//     marginVertical: height * 0.02,
//     marginTop: height * 0.04,
//     fontSize: 13,
//     color: '#344054',
//     fontWeight: '400',
//   },
//   listWrapper: {
//     width: width / 1.1,
//     height: height / 1.4,
//   },
//   propertyBox: {
//     width: '100%',
//     height: height * 0.3,
//     marginBottom: height * 0.03,
//     borderRadius: 15,
//     overflow: 'hidden',
//     justifyContent: 'flex-end',
//     elevation: 2,
//     shadowColor: "black"
//   },
//   propertyDetailsContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     padding: width * 0.04,
//   },
//   price: {
//     fontSize: 21,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   propertyDetails: {
//     fontSize: 12.79,
//     color: '#FFFFFF',
//     marginBottom: height * 0.01,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   infoText: {
//     fontSize: 12.79,
//     color: '#FFFFFF',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   exitButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: '#FE6D2B',
//     borderWidth: 1,
//     paddingVertical: height * 0.015,
//     paddingHorizontal: width * 0.12,
//     marginTop: height * 0.015,
//     borderRadius: 8,
//   },
//   exitButtonText: {
//     fontSize: 16,
//     color: '#FE6D2B',
//     fontWeight: 'bold',
//   },
// });

// export default MyListingsScreen;
