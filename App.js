import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
      <Tab.Navigator
        initialRouteName="Navigator"
        tabBarOptions={{
          activeTintColor: '#ffffff',
          activeBackgroundColor: '#6495ed',
          inactiveTintColor: '#6495ed',
          inactiveBackgroundColor: '#ffffff',
        }}>
        <Tab.Screen
          name="Upload photo"
          component={UploadPhoto}
          options={{
            tabBarLabel: 'Upload photo',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="file-upload" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Galley"
          component={Gallery}
          options={{
            tabBarLabel: 'Gallery',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="images" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
