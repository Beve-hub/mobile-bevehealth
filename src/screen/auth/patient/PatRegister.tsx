import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorFamily, fontFamily, sizing } from '../../../utils/constant'
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled'
import CustomInput from '../../../utils/shared/CustomInput'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { AuthStackParamList } from '../../../utils/interfer'
import { setAuthenticated } from '../../../app/slices/authSlice'



const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigation<NavigationProp<AuthStackParamList>>();
  const handleSubmit = () => {
    dispatch(setAuthenticated({role:'patient'}))
    navigate.navigate('BottomNavigator')
  } 
  const handleRegister = () => {
    navigate.navigate('PatLogin')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.desText}>Hi welcome back, you’ve been missed</Text>
      </View>
      <View style={styles.formContainer}>
      <CustomInput 
           label="Full Name"
           placeholder="John doe"
           iconRight="person"
           inputStyle={styles.customInput}
           labelStyle={styles.labelText}
           keyboardType="email-address"
            autoCapitalize="none" />
        <CustomInput 
           label="Email"
           placeholder="example@email.com"
           iconRight="email"
           inputStyle={styles.customInput}
           labelStyle={styles.labelText}
           keyboardType="email-address"
            autoCapitalize="none" />

       <CustomInput 
          label="Password"
          placeholder="********"
          inputStyle={styles.customInput}
          labelStyle={styles.labelText}
          iconRight="lock"
          isPassword
         keyboardType="visible-password"
         autoCapitalize="none" />         
      </View>
      <CustomButtonFilled 
      title='Register'       
      onPress={handleSubmit}
      buttonStyle={{width: sizing.SCREEN_BUTTON, paddingVertical:10,}}/>
   
    <View >
      <View style={styles.orText}>
        <Text style={styles.line}></Text>
        <Text >OR</Text>
        <Text style={styles.line}></Text>
      </View>
      <View style={styles.iconConteiner}>
        <TouchableOpacity style={styles.iconBody} activeOpacity={0.6}>
        <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity >
        <TouchableOpacity style={styles.iconBody} activeOpacity={0.6}>
        <Image source={require('../../../../assets/google.png')} alt=''/>
        </TouchableOpacity>
      </View>
      <View style={styles.registerConteiner}>
        <Text style={styles.registerTexts}>Already have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT,
    padding: sizing.SPACING
  },
  formContainer:{
    marginBottom: sizing.SPACING * 2,
    width: sizing.SCREEN_WIDTH,
    paddingHorizontal: sizing.SPACING * 2,
  },
  forgetContainer:{
    marginTop: 5,
    alignItems: 'flex-end'
  },
  titleText:{
    fontSize: 22,
    fontFamily: fontFamily.Inter_600SemiBold,
    marginBottom: 10,    
    textAlign: 'center'
  },
  desText:{
    fontFamily: fontFamily.Inter_300Light,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: colorFamily.Color_MAIN_Texting,
    marginHorizontal: sizing.SPACING  
  },
  forget: {
    color: colorFamily.Primary,
    fontFamily: fontFamily.Inter_400Regular
  },   
  labelText: {
    color: '#333',
    fontFamily: fontFamily.Inter_500Medium,
    fontSize: 14,  
  }, 
  customInput: {
    fontSize: 14,
    color: '#333',
  },
  registerConteiner: {
    flexDirection: 'row',
    color: colorFamily.Primary, 
    fontWeight: 'bold'
  },
  registerText: {
    color: colorFamily.Primary,
     fontWeight: 'bold'
    },
    registerTexts: {
      fontFamily: fontFamily.Inter_300Light,      
      },
  iconConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: sizing.SPACING,
   
  },
  iconBody: {
    backgroundColor: colorFamily.Color_Main,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  line: {
    borderBottomWidth: 1,
    borderColor: colorFamily.Color_MAIN_Texting,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  orText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center'
  },
 
})