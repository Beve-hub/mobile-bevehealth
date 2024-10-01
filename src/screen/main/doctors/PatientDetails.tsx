import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontFamily, fontSize, sizing } from '../../../utils/constant'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import AntDesign from '@expo/vector-icons/AntDesign';
// Define the navigation prop with the correct type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type PatientDetailsRouteProp = RouteProp<RootStackParamList, 'PatDetails'>;


const PatientDetails = () => {
    const route = useRoute<PatientDetailsRouteProp>();
    const {documentData} = route.params;
    const navigation = useNavigation<NavigationProp>();
  
  const initials = documentData.name
  .split('')
  .map((word: string) => word.charAt(0))
  .join('')
  .substring(0, 2);


    return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
            </TouchableOpacity>
            <Text style={styles.title}>Patient Details</Text>
        </View>
        <View >
            <Text>{initials}</Text>
        </View>
     
    </SafeAreaView>
  )
}

export default PatientDetails

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: sizing.SPACING,
      },
      title: {
        fontFamily: fontFamily.Inter_700Bold,
        fontSize: fontSize.normal,    
      },  
      header: {
        flexDirection: 'row',
        gap: sizing.SPACING,
        alignItems: 'center',
        marginVertical: sizing.SPACING,
      }
})