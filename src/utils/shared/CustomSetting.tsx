import { SafeAreaView,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colorFamily, fontFamily, fontSize, sizing } from '../constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
type Props = {}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CustomSetting = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CustomChange")}
          >
            <View style={styles.buttonText}>
              <View style={styles.icon}>
                <AntDesign name="lock" size={22} color={colorFamily.Primary} />
              </View>
              <Text style={styles.buttonText}>Change Password</Text>
            </View>
            <AntDesign name="right" size={22} color={colorFamily.Primary} />
          </TouchableOpacity>
       
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonText}>
              <View style={styles.icon}>
              <MaterialCommunityIcons name="heart-broken-outline" size={22}
                  color={colorFamily.Primary} />                
              </View>
              <Text style={styles.buttonText}>Deactivate</Text>
            </View>
          </TouchableOpacity>
         
          
        </View>
    </SafeAreaView>
  )
}

export default CustomSetting

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT, 
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
button: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: sizing.SUB_SPACING,
  borderBottomWidth: 1,
  borderColor: colorFamily.Color_Main,
},
buttons: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: sizing.SUB_SPACING,
},
buttonText: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: sizing.SUB_SPACING,
  fontFamily: fontFamily.Inter_500Medium,
  fontSize: fontSize.Sub_medium,
},
icon: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: sizing.SUB_SPACING,
  backgroundColor: colorFamily.Color_SUB,
  borderRadius: sizing.SPACING,
},
})