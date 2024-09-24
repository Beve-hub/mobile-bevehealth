import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant';
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


type Props = {}

const DocHome = (props: Props) => {
 const navigate = useNavigation()
  const handleSubmit = () => {  
    navigate.navigate('#')
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity activeOpacity={0.6} style={styles.content}>
        <View style={styles.container}>
          <Ionicons name="notifications-sharp" size={30} color={colorFamily.Color_MAIN_Text} />
        </View>
      </TouchableOpacity>
      
      <LinearGradient
        colors={[colorFamily.Gradient_Green_Grey[0], colorFamily.Gradient_Green_Gray[1]]} // Ensure this is an array with two valid color values
        style={styles.gradient}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }}
      >
        <View>
        <Text style={styles.title}>Welcome</Text>
        <View>
        <Text style={styles.name}>Dr.Victor Okeke</Text>
        <Text style={styles.text}>Your health is our Priority,  stay alive</Text>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Name}>
            Membership ID
          </Text>
        </TouchableOpacity>
        </View>
        
      </LinearGradient>

      <View>
        <View style={styles.document}>
          <Text style={styles.title}>Documemt</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.all}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View>
          <SimpleLineIcons name="folder" size={24} color="black" />
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DocHome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 4,
    backgroundColor: colorFamily.Color_icon,
    width: 40,
  },
  gradient: {    
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizing.SPACING,
    borderRadius: 10, // Optional: Add a borderRadius to style the gradient
  },
  title: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.normal
  },
  name: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_800ExtraBold,
    fontSize: fontSize.Sub_Normal
  },
  text: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.medium
  },
  Button:{
    backgroundColor: colorFamily.Primary,
    paddingHorizontal: sizing.SUB_SPACING,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Add shadow to button
    borderRadius: 10,
    marginTop: sizing.SPACING,   
    color: colorFamily.Color_SUB_MAIN_Text
  },
 Name:{
    color: colorFamily.Color_SUB_MAIN_Text   
  },
  document: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: sizing.SPACING,
    marginBottom: sizing.SPACING * 2,
  },
  all: {
    color: colorFamily.Primary,    
  }
});
