import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PinScreen from "../screen/auth/PinScreen";
import ResetPassword from "./../screen/auth/ResetPassword";
import ForgottenPassword from "../screen/auth/ForgottenPassword";
import OnboardSelect from "../screen/onboard/OnboardSelect";
import CompleteDocProfile from "../screen/auth/doctor/CompleteDocProfile";
import CompletePatProfile from "../screen/auth/patient/CompletePatProfile";
import Login from './../screen/auth/Login';
import Register from "../screen/auth/Register";

export type AuthStackParamList = {
  OnboardSelect: undefined;
  Login: undefined; // Add this for a general Login
  DocLogin: undefined;
  DocRegister: undefined;
  Register: undefined; // Add this for a general Register
  CompleteDocProfile: undefined;
  PatLogin: undefined;
  PatRegister: undefined;
  CompletePatProfile: undefined;
  PinScreen: undefined;
  ResetPassword: undefined;
  ForgottenPassword: undefined;
};

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardSelect"
        component={OnboardSelect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
  name="Login"
  component={Login}
  options={{ headerShown: false }}
/>
<Stack.Screen
  name="Register"
  component={Register}
  options={{ headerShown: false }}
/>

      <Stack.Screen
        name="CompleteDocProfile"
        component={CompleteDocProfile}
        options={{ headerShown: false }}
      />
     
      
      <Stack.Screen
        name="CompletePatProfile"
        component={CompletePatProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PinScreen"
        component={PinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgottenPassword"
        component={ForgottenPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
