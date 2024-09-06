
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


LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();

const MainStackNav = () => {
return( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"View"} screenOptions={{
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
    </Stack.Navigator>
    </NavigationContainer>
    )

};



export default MainStackNav;

