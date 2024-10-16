import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DocBottomNavigator from "./BottomNavigator";
import DocHome from "../screen/main/doctors/DocHome";
import DocDocument from "../screen/main/doctors/DocDocument";
import DocCalender from "../screen/main/doctors/DocCalender";
import DocProfile from "../utils/shared/Profile";
import PatHome from "../screen/main/patient/PatHome";
import PatDocument from "../screen/main/patient/PatDocument";
import PatCalender from "../screen/main/patient/PatCalender";
import CustomChat from "./../utils/shared/CustomChat";
import ChatBox from "../utils/shared/ChatBox";
import CustomBookings from "../utils/shared/CustomBookings";
import { RootStackParamList } from "./RootStack";
import CustomCall from "../utils/shared/CustomCall";
import CustomVideo from "../utils/shared/CustomVideo";
import PatientDetails from "../screen/main/doctors/PatientDetails";
import DocDetails from "../screen/main/patient/DocDetails";
import CustomProfile from "../utils/shared/CustomProfile";
import CustomSetting from "../utils/shared/CustomSetting";
import CustomChange from "../utils/shared/CustomChange";

// Use the type in your Stack.Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerShadowVisible: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="BottomNavigator"
        component={DocBottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DocHome" component={DocHome} />
      <Stack.Screen name="DocDocument" component={DocDocument} 
      />
      <Stack.Screen name="DocCalender" component={DocCalender} 
      />
      <Stack.Screen name="CustomChat" component={CustomChat} 
      />
      <Stack.Screen name="DocProfile" component={DocProfile} 
      />      
      <Stack.Screen name="PatHome" component={PatHome} />
      <Stack.Screen name="CustomProfile" component={CustomProfile}
      options={{ headerShown: false }}
      />
      <Stack.Screen name="CustomSetting" component={CustomSetting}
      options={{ headerShown: false }}
      />
      <Stack.Screen name="CustomChange" component={CustomChange}
      options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatBox"
        component={ChatBox}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookSession"
        component={CustomBookings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Call"
        component={CustomCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Video"
        component={CustomVideo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatDetails"
        component={PatientDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DocDetails"
        component={DocDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PatDocument" component={PatDocument} options={{ headerShown: false }}/>
      <Stack.Screen name="PatCalender" component={PatCalender} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppScreens;
