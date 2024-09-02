import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './../screen/main/Home';
import BottomNavigator from './BottomNavigator';
import Profile from './../screen/main/Profile';
import Chat from './../screen/main/Chat';
import Calender from './../screen/main/Calender';
import Document from './../screen/main/Document';


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
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Document' component={Document}/>
      <Stack.Screen name='Calender' component={Calender}/>
      <Stack.Screen name='Chat' component={Chat}/>
      <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
  )
}

export default AppScreens

