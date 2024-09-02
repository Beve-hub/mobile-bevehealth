
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AppScreens from './AppScreens';
import AuthNavigator from './AuthNavigator';
import Onboarding from './Onboarding';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
 const isFirstLaunch = useSelector((state: any) => state.auth.isFirstLaunch)
 const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  return (
   <NavigationContainer>
    {isFirstLaunch ? (
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }}/>
      </Stack.Navigator>
    ) : isAuthenticated ? (
      <AppScreens/>
    ) : (
      <AuthNavigator/>
    )}
   </NavigationContainer>
  )
}

export default AppNavigator

