import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocBottomNavigator from './BottomNavigator';
import DocHome from '../screen/main/doctors/DocHome';
import DocDocument from '../screen/main/doctors/DocDocument';
import DocCalender from '../screen/main/doctors/DocCalender';
import DocProfile from '../screen/main/doctors/DocProfile';
import PatHome from '../screen/main/patient/PatHome';
import PatDocument from '../screen/main/patient/PatDocument';
import PatCalender from '../screen/main/patient/PatCalender';
import PatChat from '../screen/main/patient/PatChat';
import PatProfile from '../screen/main/patient/PatProfile';
import CustomChat from './../utils/shared/CustomChat';
import ChatBox from '../utils/shared/ChatBox';
import CustomBookings from '../utils/shared/CustomBookings';
import { RootStackParamList } from './RootStack';

// Use the type in your Stack.Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="DocBottomNavigator" component={DocBottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="DocHome" component={DocHome} />
      <Stack.Screen name="DocDocument" component={DocDocument} />
      <Stack.Screen name="DocCalender" component={DocCalender} />
      <Stack.Screen name="CustomChat" component={CustomChat} />
      <Stack.Screen name="DocProfile" component={DocProfile} />
      <Stack.Screen name="PatHome" component={PatHome} />
      <Stack.Screen name="PatDocument" component={PatDocument} />
      <Stack.Screen name="PatCalender" component={PatCalender} />
      <Stack.Screen name="PatChat" component={PatChat} />
      <Stack.Screen name="PatProfile" component={PatProfile} />
      <Stack.Screen name="ChatBox" component={ChatBox} options={{ headerShown: false }} />
      <Stack.Screen name="BookSession" component={CustomBookings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppScreens;
