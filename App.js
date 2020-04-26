import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Gallery from './src/containers/Gallery';
import UploadPhoto from './src/containers/UploadPhoto';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Upload photo" component={UploadPhoto} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}