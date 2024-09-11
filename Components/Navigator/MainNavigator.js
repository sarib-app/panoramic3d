
import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import CapturePanoramaScreen from '../CaptureModules/CaptureScreen';
import ViewScreen from '../CaptureModules/ViewScreen';
import OnBoardScreen from '../OnBoardScreen.js/OnBoardScreen';
import HomeScreen from '../Home/HomeScreen';
import MyListingsScreen from '../LIisting/MyLIsting';
import CaptureTourScreen from '../BeginScan/BeginScan';
import AddFloorScreen from '../LIsting/CreateLIsting';
import SnapShotScreen from '../CaptureModules/SnapshotScreen';
import PropertyDetailsScreen from '../PropertyDetails/PropertyDetails';
import AddPropertyScreen from '../add_property/Add_property';
import ImageGridScreen from '../ImageGrid/ImageGrid';


LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();

const MainStackNav = () => {
return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"OnBoardScreen"} screenOptions={{
      headerShown: false
    }}
    >
        {/* <Stack.Screen name="MockUp" component={MockUp} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Capture" component={CapturePanoramaScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="MyListingsScreen" component={MyListingsScreen}/>
        <Stack.Screen name="CaptureTourScreen" component={CaptureTourScreen}/>
        <Stack.Screen name="AddFloorScreen" component={AddFloorScreen} />
        <Stack.Screen name="SnapShotScreen" component={SnapShotScreen} />
        <Stack.Screen name="PropertyDetailsScreen" component={PropertyDetailsScreen} />
        <Stack.Screen name="AddPropertyScreen" component={AddPropertyScreen} />
        <Stack.Screen name="ImageGridScreen" component={ImageGridScreen} />


    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default MainStackNav;

