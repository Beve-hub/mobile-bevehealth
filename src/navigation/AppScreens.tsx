import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/main/patient/PatHome';
import BottomNavigator from './BottomNavigator';
import Profile from '../screen/main/patient/PatProfile';
import Chat from '../screen/main/patient/PatChat';
import Calender from '../screen/main/patient/PatCalender';
import Document from '../screen/main/patient/PatDocument';
import DocHome from '../screen/main/doctors/DocHome';
import DocDocument from '../screen/main/doctors/DocDocument';
import DocCalender from '../screen/main/doctors/DocCalender';
import DocChat from '../screen/main/doctors/DocChat';
import DocProfile from '../screen/main/doctors/DocProfile';
import PatHome from '../screen/main/patient/PatHome';
import PatDocument from '../screen/main/patient/PatDocument';
import PatCalender from '../screen/main/patient/PatCalender';
import PatChat from '../screen/main/patient/PatChat';
import PatProfile from '../screen/main/patient/PatProfile';


const Stack = createNativeStackNavigator();
const AppScreens = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      animation: 'slide_from_right',
    }}>
      <Stack.Screen name='BottomNavigator' component={BottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='DocHome' component={DocHome}/>
      <Stack.Screen name='DocDocument' component={DocDocument}/>
      <Stack.Screen name='DocCalender' component={DocCalender}/>
      <Stack.Screen name='DocChat' component={DocChat}/>
      <Stack.Screen name='DocProfile' component={DocProfile}/>
      <Stack.Screen name='PatHome' component={PatHome}/>
      <Stack.Screen name='PatDocument' component={PatDocument}/>
      <Stack.Screen name='PatCalender' component={PatCalender}/>
      <Stack.Screen name='PatChat' component={PatChat}/>
      <Stack.Screen name='PatProfile' component={PatProfile}/>
    </Stack.Navigator>
  )
}

export default AppScreens

