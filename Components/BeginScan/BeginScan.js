import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { width, height } from '../Globals/getDimensions';
import { width,height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
// import MainHeader from '../Globals/Branding/MainHeader';
import MainHeader from '../Globals/Branding/MainHeader';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        paddingVertical: width * 0.05,
        alignItems:"center"
    },
    description: {
        fontSize: 13,
        color: '#344054',
        marginBottom: height * 0.03,
        lineHeight: 22,
        width:width/1.12
    },
    box: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        width:width/1.1,
        padding: 15,
        marginBottom: height * 0.02,
    },
    boxTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#001659',
        marginBottom: 8,
    },
    boxBody: {
        fontSize: 12.75,
        color: '#344054',
        fontWeight:'300'
    },
    buttonContainer: {
        marginTop: height * 0.03,
        alignItems: 'center',
    },
    primaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FE6D2B',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
        borderRadius: 8,
        marginBottom: height * 0.02,
    },
    primaryButtonText: {
        fontSize: 13,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginRight: 10,
    },
    secondaryButton: {
        borderWidth: 2,
        borderColor: '#FE6D2B',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
        borderRadius: 8,
    },
    secondaryButtonText: {
        fontSize: 13,
        color: '#FE6D2B',
        fontWeight: 'bold',
    },
});

export default CaptureTourScreen;
