import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PinScreen from "../screen/auth/PinScreen";
import ResetPassword from "./../screen/auth/ResetPassword";
import ForgottenPassword from "../screen/auth/ForgottenPassword";
import Login from './../screen/auth/Login';
import Register from "../screen/auth/Register";
import CompleteProfile from "../screen/auth/CompleteProfile";

export type AuthStackParamList = {
  Login: undefined; // Add this for a general Login
  DocLogin: undefined;
  DocRegister: undefined;
  Register: undefined; // Add this for a general Register
  CompleteProfile: undefined;
  PatLogin: undefined;
  PatRegister: undefined;
  PinScreen: undefined;
  ResetPassword: undefined;
  ForgottenPassword: undefined;
};

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
     
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
        name="CompleteProfile"
        component={CompleteProfile}
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
