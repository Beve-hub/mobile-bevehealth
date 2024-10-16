import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';  // Import useRoute to access navigation params
import { colorFamily, fontFamily, fontSize, sizing } from '../constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CustomProfile = (props: Props) => {
  const route = useRoute();
  const { initials } = route.params as { initials: string };  // Destructure initials from route params
  const navigation = useNavigation<NavigationProp>();

  
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.profilePicContainer}>
            <Text style={styles.profilePicText}>{initials}</Text>
          </View>
        </View>

        <View style={styles.contactnfos}>

        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Full Name: </Text>
          <Text style={styles.box}>john doe</Text>
        </View>
        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Card Number: </Text>
          <Text style={styles.box}>BH224411</Text>
        </View>
        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Email: </Text>
          <Text style={styles.box}>{initials.toLowerCase()}@example.com</Text>
        </View>
        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Phone Number: </Text>
          <Text style={styles.box}>09024365768</Text>
        </View>

        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Sex: </Text>
          <Text style={styles.box}>Male</Text>
        </View>

        <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Blood Group: </Text>
          <Text style={styles.box}>0+                                                          </Text>
        </View>

        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default CustomProfile

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: sizing.SPACING,
        width: sizing.SCREEN_WIDTH,
        height: sizing.SCREEN_HEIGHT, 
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: sizing.SPACING, // Optional: Add bottom padding
    },
    profile: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      profileInfo: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: sizing.SPACING,
        marginBottom: sizing.SPACING * 2,
      },
      contactnfo: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: sizing.SPACING ,
        },
        contactnfos: {          
          marginTop: sizing.SPACING * 3 ,
        },
      email: {
        color: colorFamily.Color_MAIN_Texting,
        fontFamily: fontFamily.Inter_400Regular,
        fontSize: fontSize.Sub_medium,
      },
      profilePicContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: colorFamily.Color_SUB,
        justifyContent: "center",
        alignItems: "center",
        marginTop: sizing.SPACING,
      },
      profilePicText: {
        color: colorFamily.Color_MAIN_Text,
        fontFamily: fontFamily.Inter_600SemiBold,
        fontSize: fontSize.Sub_Normal,
      },
      name: {
        color: colorFamily.Color_MAIN_Text,
        fontFamily: fontFamily.Inter_600SemiBold,
        fontSize: fontSize.Sub_Normal,
        marginTop: sizing.SPACING * 2,
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
      box: {
        borderWidth: 1,
        width: sizing.SCREEN_INPUTS,
        padding:sizing.SUB_SPACING,
        marginTop:sizing.SUB_SPACING,     
        borderColor: colorFamily.Color_MAIN_Texting,
        color: colorFamily.Color_MAIN_Texting,
        borderRadius: sizing.MINI_SPACING
      },
      nameTitle: {
        color: colorFamily.Color_MAIN_Texting
      }
})
