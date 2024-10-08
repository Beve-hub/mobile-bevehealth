import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../app/slices/authSlice";
import { colorFamily, fontFamily, fontSize, sizing } from "../../utils/constant";
import CustomInput from "../../utils/shared/CustomInput";
import CustomButtonFilled from "../../utils/shared/CustomButtonFilled";
import { RootStackParamList } from "../../navigation/RootStack";
import CustomSelect from "../../utils/shared/CustomSelect";


const CompleteProfile = () => {
    const userName = "John Doe"; // This can be dynamically set based on user data
  const initials = userName
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase(); // Extract the initials from the name

    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const  [role, setRole] = useState<"professional" | "patient">("patient");
    const [selectedOption, setSelectedOption] = useState('');
    const handleSubmit = () => {
      dispatch(setAuthenticated({ role}));
      navigation.navigate("BottomNavigator");
    };

    
    const handleSelect = (value: string) => {
      setSelectedOption(value); // Update selected option
  };

  return (
    <SafeAreaView style={styles.safeArea}>
     <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.titleText}>Complete Your Profile</Text>
      <Text style={styles.desText}>Don’t worry, only you can see your personal data.  No one else can see it. </Text>
    </View>
    <View style={styles.profile}>
           <View style={styles.profilePicContainer}>
           <Text style={styles.profilePicText}>{initials}</Text>
             </View>
             <View style={styles.profileInfo}>
              <Text style={styles.names}>John Doe</Text>              
             </View>
            
           </View>
    <View style={styles.formContainer}>
      <CustomInput
        label="Phone Number"
        placeholder="+234 01987654"        
        inputStyle={styles.customInput}
        labelStyle={styles.labelText}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <View>
        <Text>Sex</Text>
        <CustomSelect
         onSelect={handleSelect}
         value={selectedOption}
         options={['male', 'Female']}
      />
      </View>
      <View>
        <Text>Blood Group</Text>
        <CustomSelect
         onSelect={handleSelect}
         value={selectedOption}
         options={['o', 'o+', 'A', 'A+', 'B', 'B+']}
      />
      </View>
      <View>
        <Text>GenoType</Text>
        <CustomSelect
         onSelect={handleSelect}
         value={selectedOption}
         options={['AA', 'AS', 'SS']}
      />
      </View>
      <View>
        <Text>Role</Text>
        <CustomSelect
         onSelect={handleSelect}
         value={selectedOption}
         options={['Patient', 'Professional']}
      />
      </View>
      <View>
        <Text>Department</Text>
        <CustomSelect
         onSelect={handleSelect}
         value={selectedOption}
         options={['General Doctor', 'Cardiologist', 'Gynecologist']}
      />
      </View>
      
      
      <View style={styles.buttonContainer}>
         <CustomButtonFilled
      title="Submit"
      onPress={handleSubmit}
      buttonStyle={styles.button}
    />
    </View>
    </View>
    
   
    </ScrollView>   
  </SafeAreaView>
  )
}

export default CompleteProfile

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingVertical: sizing.SPACING,
        width: sizing.SCREEN_WIDTH,
        height: sizing.SCREEN_HEIGHT,
        
      },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: sizing.SPACING, // Optional: Add bottom padding
    },
    
    formContainer: {
      marginBottom: sizing.MINI_SPACING ,
      paddingHorizontal: sizing.SPACING * 2,
    },
    forgetContainer: {
      marginTop: 5,
      alignItems: "flex-end",
    },
    titleText: {
      fontSize: 22,
      fontFamily: fontFamily.Inter_600SemiBold,
      textAlign: "center",
    },
    desText: {
      fontFamily: fontFamily.Inter_300Light,
      fontSize: 14,
      textAlign: "center",
      marginBottom: sizing.SUB_SPACING,
      color: colorFamily.Color_MAIN_Texting,
      marginHorizontal: sizing.SPACING,
    },
    forget: {
      color: colorFamily.Primary,
      fontFamily: fontFamily.Inter_400Regular,
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
    button: {
        width: sizing.SCREEN_BUTTON,        
    },
    buttonContainer: {
        flexDirection:'row',
        width: sizing.SCREEN_BUTTON,
         paddingVertical: sizing.MINI_SPACING,
         justifyContent:'center',
         alignItems: 'center', 
    },
    registerConteiner: {
      flexDirection: "row",
      color: colorFamily.Primary,
      fontWeight: "bold",
    },
    registerText: {
      color: colorFamily.Primary,
      fontWeight: "bold",
    },
    registerTexts: {
      fontFamily: fontFamily.Inter_300Light,
    },
    iconConteiner: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: sizing.SPACING,
    },
    iconBody: {
      backgroundColor: colorFamily.Color_Main,
      padding: 5,
      borderRadius: 10,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
    },
    line: {
      borderBottomWidth: 1,
      borderColor: colorFamily.Color_MAIN_Texting,
      width: 100,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
    },
    orText: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 20,
      alignItems: "center",
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
        marginTop: sizing.MINI_SPACING,
        marginBottom: sizing.SPACING 
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
      names: {
        color: colorFamily.Color_MAIN_Text,
        fontFamily: fontFamily.Inter_600SemiBold,
        fontSize: fontSize.Sub_Normal,   
      },
  });