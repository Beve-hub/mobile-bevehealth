import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
type Props = {}

const DocProfile = (props: Props) => {
  const userName = "John Doe"; // This can be dynamically set based on user data
  const initials = userName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase(); // Extract the initials from the name
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Profile</Text>
           <View style={styles.profile}>
           <View style={styles.profilePicContainer}>
           <Text style={styles.profilePicText}>{initials}</Text>
             </View>
             <View style={styles.profileInfo}>
              <Text style={styles.names}>John Doe</Text>
              <Text style={styles.email}>johndoe@example.com</Text>
             </View>
            
           </View>
           <View>
             <TouchableOpacity style={styles.button}>
              <View style={styles.buttonText}>
                <View style={styles.icon}>
                <AntDesign name="user" size={22} color={colorFamily.Primary} />
                </View>
              <Text style={styles.buttonText}>My Profile</Text>
              </View>
              <AntDesign name="right" size={22} color={colorFamily.Primary} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
              <View style={styles.buttonText}>
                <View style={styles.icon}>
                <AntDesign name="setting" size={22} color={colorFamily.Primary} />
                </View>
              <Text style={styles.buttonText}>Settings</Text>
              </View>
              <AntDesign name="right" size={22} color={colorFamily.Primary} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
              <View style={styles.buttonText}>
                <View style={styles.icon}>
                <Ionicons name="help-circle-outline" size={22} color={colorFamily.Primary} />
                </View>              
              <Text style={styles.buttonText}>Help</Text>
              </View>
              <AntDesign name="right" size={22} color={colorFamily.Primary} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
              <View style={styles.buttonText}>
                <View style={styles.icon}>
                <AntDesign name="lock" size={22} color={colorFamily.Primary} />
                </View>              
              <Text style={styles.buttonText}>Privacy Policy</Text>
              </View>  
              <AntDesign name="right" size={22} color={colorFamily.Primary} />              
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttons}>
             <View style={styles.buttonText}>
             <View style={styles.icon}>
                <AntDesign name="logout" size={18} color={colorFamily.Primary} />
                </View> 
              <Text style={styles.buttonText}>Logout</Text>
                </View> 
                
             </TouchableOpacity>
           </View>
      </ScrollView>      
    </SafeAreaView>
  )
}

export default DocProfile

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: sizing.SPACING, // Optional: Add bottom padding
  },
  name: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.Sub_Normal,
    marginTop: sizing.SPACING * 2
  },
  names: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.Sub_Normal,   
  },
  button: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: sizing.SUB_SPACING,
    borderBottomWidth: 1,
    borderColor: colorFamily.Color_Main,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: sizing.SUB_SPACING,    
  },
  buttonText: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap: sizing.SUB_SPACING,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.Sub_medium,
  },
  icon: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: sizing.SUB_SPACING,  
    backgroundColor: colorFamily.Color_SUB,
    borderRadius: sizing.SPACING ,
  },
  profile: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',    
  },

profileInfo:{
  flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: sizing.SPACING,
    marginBottom: sizing.SPACING *2
},
email: {
  color: colorFamily.Color_MAIN_Texting,
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_medium,
},
profilePicContainer: {
  width: 80,
  height: 80,
  borderRadius: 100,
  backgroundColor: colorFamily.Color_SUB,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: sizing.SPACING
},
profilePicText: {
  color: colorFamily.Color_MAIN_Text,
  fontFamily: fontFamily.Inter_600SemiBold,
  fontSize: fontSize.Sub_Normal,
},
})