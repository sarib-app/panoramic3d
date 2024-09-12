import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { width, height } from '../Globals/getDimensions';
import { width,height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
// import MainHeader from '../Globals/Branding/MainHeader';
import MainHeader from '../Globals/Branding/MainHeader';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const CaptureTourScreen = ({route}) => {
    const  {property_id} = route.params
const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {/* <MainHeader title="Capture Your 3D Tour" />  Reusable Header Component */}
            <MainHeader 
            screenName="Capture Your 3D Tour"
            />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.description}>
                    You’re ready to capture a 3D tour of your property using your smartphone. Follow these steps to get started:
                </Text>

                <View style={styles.box}>
                    <Text style={styles.boxTitle}>Prepare Your Device</Text>
                    <Text style={styles.boxBody}>
                        Ensure your iPhone or Android device is fully charged and has sufficient storage space.
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxTitle}>Follow On-Screen Instructions:</Text>
                    <Text style={styles.boxBody}>
                        The app will guide you through the process of capturing the property. Make sure to move slowly and cover all areas for the best results.
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxTitle}>Review and Upload</Text>
                    <Text style={styles.boxBody}>
                        Once you've finished capturing, review the 3D tour within the app and upload it to our platform.
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.primaryButton}
                    onPress={()=> navigation.navigate("AddFloorScreen",{property_id:property_id})                }
                    >
                        <Text style={styles.primaryButtonText}>Begin 3D Tour Capture</Text>
                        {/* <MaterialIcons name="play-arrow" size={24} color="#FFFFFF" /> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    
                    style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>Choose Another Property</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};



export default CaptureTourScreen;
