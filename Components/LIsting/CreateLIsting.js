import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { width, height } from '../Globals/getDimensions';
import { width,height } from '../Globals/getDImensions';
import MainHeader from '../Globals/Branding/MainHeader';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const AddFloorScreen = ({route}) => {
    const  {property_id} = route.params
    const navigation = useNavigation()
    const data = [
        { title: "Basement" },
        { title: "Floor 1" },
        { title: "Floor 2" },
        { title: "Floor 3" },
        { title: "Floor 4" },
        { title: "Attic" },
        { title: "Rooftop" },
    ];

    const renderFloorItem = ({ item }) => (
        <TouchableOpacity
        onPress={()=> navigation.navigate("Capture",{property_id:property_id,label:item.title})}
        style={styles.floorItem}>
            <Text style={styles.floorTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <MainHeader screenName={"Add a Floor"}/>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Choose area to get started:
                </Text>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add +</Text>
                </TouchableOpacity>

                <FlatList
                    data={data}
                    renderItem={renderFloorItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </View>
    );
};



export default AddFloorScreen;
