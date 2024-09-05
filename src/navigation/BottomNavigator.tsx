import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DocHome from '../screen/main/doctors/DocHome';
import DocDocument from '../screen/main/doctors/DocDocument';
import DocChat from '../screen/main/doctors/DocChat';
import DocCalender from '../screen/main/doctors/DocCalender';
import DocProfile from '../screen/main/doctors/DocProfile';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={DocHome} />
        <Tab.Screen name="DocDocument" component={DocDocument} />
        <Tab.Screen name="DocChat" component={DocChat} />
        <Tab.Screen name="Settings" component={DocCalender} />
        <Tab.Screen name="Settings" component={DocProfile} />
      </Tab.Navigator>
  )
}

export default BottomNavigator

