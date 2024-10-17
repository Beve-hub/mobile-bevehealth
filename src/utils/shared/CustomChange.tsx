import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontFamily, fontSize, sizing } from '../constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import CustomInput from './CustomInput';
import CustomButtonFilled from './CustomButtonFilled';

type Props = {}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const CustomChange = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();    
   
    const handleSubmit = () => {
      
      navigation.navigate("BottomNavigator");
    };
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Change Password</Text>
        </View>


        <View style={styles.container}>
        <CustomInput
        label="Old Password"
        placeholder="********"
        inputStyle={styles.customInput}
        labelStyle={styles.labelText}
        iconRight="lock"
        isPassword
        keyboardType="visible-password"
        autoCapitalize="none"
      />
      <CustomInput
        label="New Password"
        placeholder="********"
        inputStyle={styles.customInput}
        labelStyle={styles.labelText}
        iconRight="lock"
        isPassword
        keyboardType="visible-password"
        autoCapitalize="none"
      />
      <CustomInput
        label="Confirm Password"
        placeholder="********"
        inputStyle={styles.customInput}
        labelStyle={styles.labelText}
        iconRight="lock"
        isPassword
        keyboardType="visible-password"
        autoCapitalize="none"
      />
      <CustomButtonFilled
      title="Update"
      onPress={handleSubmit}
      buttonStyle={{  paddingVertical: sizing.MINI_SPACING, marginTop:sizing.SPACING }}
    />
        </View>
    </SafeAreaView>
  )
}

export default CustomChange

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT,
  },
  container: {
    marginBottom: sizing.SPACING,    
  },
  header: {
    flexDirection: 'row',
    gap: sizing.SPACING,
    alignItems: 'center',
    marginVertical: sizing.SPACING,
  },
  title: {
    fontFamily: fontFamily.Inter_700Bold,                                                                                              
    fontSize: fontSize.normal,
  },
  labelText: {
    color: "#333",
    fontFamily: fontFamily.Inter_500Medium,
    fontSize: 14,
  },
  customInput: {
    fontSize: 14,
    color: "#333",
  },
})