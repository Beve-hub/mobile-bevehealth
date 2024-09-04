import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorFamily, fontFamily, sizing } from '../../../utils/constant'
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled'
import CustomInput from '../../../utils/shared/CustomInput'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../../navigation/AuthNavigator'

const Login = () => {
  const navigate = useNavigation<NavigationProp<AuthStackParamList>>();
  const handleSubmit = () => {
    // Handle form submission logic here
  }
  const handleForget = () => {
    navigate.navigate('ForgottenPassword')
  }
  const handleRegister = () => {
    navigate.navigate('ResetPassword')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.desText}>Hi welcome back, you’ve been missed</Text>
      </View>
      <View style={styles.formContainer}>
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
         <View style={styles.forgetContainer}>
          <TouchableOpacity onPress={handleForget}>
            <Text style={styles.forget}>Forgot Password?</Text>
          </TouchableOpacity>
         </View>
      </View>
      <CustomButtonFilled 
      title='Sign in'       
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
        <Text style={styles.registerTexts}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Login

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
    fontSize: 24,
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
    fontSize: 16,  
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