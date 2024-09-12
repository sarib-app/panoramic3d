import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { width, height } from '../Globals/getDImensions';
import { MaterialIcons } from 'react-native-vector-icons';
import MainHeader from '../Globals/Branding/MainHeader';
// Sample logos
import homeLogo1 from '../../assets/images/home1.png'; // Import your logos
import homeLogo2 from '../../assets/images/home2.png'; // Import your logos
import { useIsFocused, useNavigation } from '@react-navigation/native';


import styles from './Styles';


const HomeScreen = () => {
    const navigation = useNavigation();
    const focused = useIsFocused()
    const slideAnim = useRef(new Animated.Value(-height)).current; // Initial position off-screen
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity

    useEffect(() => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0, // Slide down to its original position
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1, // Fade in to full opacity
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, [focused]);

    const navigateWithFadeOut = (route) => {
        Animated.timing(fadeAnim, {
            toValue: 0, // Fade out before navigating
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            navigation.navigate(route);
        });
    };

    function BoxView({ logo, title, description, btnTxt, routeTo }) {
        return (
            <View style={styles.box}>
                <View style={styles.boxInner}>
                    <Image source={logo} style={styles.boxLogo} />
                    <Text style={styles.boxTitle}>{title}</Text>
                    <Text style={styles.boxDescription}>{description}</Text>
                    <TouchableOpacity onPress={() => navigateWithFadeOut(routeTo)} style={styles.boxButton}>
                        <Text style={styles.boxButtonText}>{btnTxt}</Text>
                        {/* <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" style={styles.buttonIcon} /> */}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
      <View style={styles.container}>

        <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
            <MainHeader screenName="3D Home Tour" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>
                        Welcome to our platform! To get started with creating a 3D tour of your property, you need to follow these simple steps:
                    </Text>
                </View>
                <BoxView 
                    logo={homeLogo1}
                    title={"1. List Your Property:"}
                    description={"If you haven’t listed your property yet, you need to create a new listing first. Once your property is listed, you'll be able to capture a 3D tour."}
                    btnTxt={"Create New Listing"}
                    routeTo={"AddPropertyScreen"}
                />
                <BoxView 
                    logo={homeLogo2}
                    title={"2. Capture a 3D Tour:"}
                    description={"If you already have a property listed, you can capture and upload a 3D tour to showcase it in detail."}
                    btnTxt={"Capture 3D Tour for Existing Listing"}
                    routeTo={"MyListingsScreen"}
                />
                <TouchableOpacity onPress={() => navigateWithFadeOut("MyListingsScreen")} style={styles.resumeButton}>
                    <Text style={styles.resumeButtonText}>Resume Draft</Text>
                    {/* <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" style={styles.buttonIcon} /> */}
                </TouchableOpacity>
            </ScrollView>
        </Animated.View>
      </View>

    );
};



export default HomeScreen;
