import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/auth/Login';
import Register from './../screen/auth/Register';
import PinScreen from './../screen/auth/PinScreen';
import ResetPassword from './../screen/auth/ResetPassword';
import ForgottenPassword from '../screen/auth/ForgottenPassword';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='PinScreen' component={PinScreen}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword}/>
      <Stack.Screen name='ForgottenPassword' component={ForgottenPassword}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator