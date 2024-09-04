import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatLogin from '../screen/auth/patient/PatLogin';
import PatRegister from '../screen/auth/patient/PatRegister';
import PinScreen from '../screen/auth/PinScreen';
import ResetPassword from './../screen/auth/ResetPassword';
import ForgottenPassword from '../screen/auth/ForgottenPassword';
import OnboardSelect from '../screen/onboard/OnboardSelect';
import DocLogin from '../screen/auth/doctor/DocLogin';
import DocRegister from './../screen/auth/doctor/DocRegister';
import CompleteDocProfile from '../screen/auth/doctor/CompleteDocProfile';
import CompletePatProfile from '../screen/auth/patient/CompletePatProfile';


export type AuthStackParamList = {
  DocLogin: undefined;
  DocRegister: undefined;
  CompleteDocProfile: undefined;
  PatLogin: undefined;
  PatRegister: undefined;
  CompletePatProfile: undefined;
  PinScreen: undefined;
  ResetPassword: undefined;
  ForgottenPassword: undefined;
  OnboardSelect: undefined; // this is the first screen in the stack, it doesn't have a name prop. It's used to determine the initial screen to render in the stack.
};
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OnboardSelect' component={OnboardSelect} options={{ headerShown: false }}/>
      <Stack.Screen name='DocLogin' component={DocLogin} options={{ headerShown: false }}/>
      <Stack.Screen name='DocRegister' component={DocRegister} options={{ headerShown: false }}/>
      <Stack.Screen name='CompleteDocProfile' component={CompleteDocProfile} options={{ headerShown: false }}/>
      <Stack.Screen name='PatLogin' component={PatLogin} options={{ headerShown: false }}/>
      <Stack.Screen name='PatRegister' component={PatRegister} options={{ headerShown: false }}/>
      <Stack.Screen name='CompletePatProfile' component={CompletePatProfile} options={{ headerShown: false }}/>
      <Stack.Screen name='PinScreen' component={PinScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }}/>
      <Stack.Screen name='ForgottenPassword' component={ForgottenPassword} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator