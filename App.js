import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Gallery from './src/containers/Gallery';
import UploadPhoto from './src/containers/UploadPhoto';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Upload photo" component={UploadPhoto} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}