import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';

type Props = {}

const data = [
  {
    name: 'David D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  {
    name: 'John D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  {
    name: 'Victor D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  {
    name: 'Jerome D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  // Add more appointment data as needed
]


const DocDocument = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handleCardPress = (item: any) => {
    navigation.navigate('PatDetails', { documentData: item });
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Document</Text>
           
      <View style={styles.CardContainer}>
        
        {data.map((item, index) => (
          <TouchableOpacity 
          activeOpacity={0.6} 
          key={index} style={styles.appointment} 
          onPress={() => handleCardPress(item)}
          >
            <View style={styles.DocContainer}>
            <SimpleLineIcons name="folder" size={24} color="black" />
            <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.reason}>{item.reason}</Text>
            </View>            
            </View>
            
            <TouchableOpacity activeOpacity={0.6} style={styles.location}>
            <AntDesign name="download" size={24} color="black" />
            </TouchableOpacity>
           
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>      
    </SafeAreaView>
  )
}

export default DocDocument

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
  appointment: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: sizing.SUB_SPACING ,
    alignItems:'center',  
    backgroundColor: colorFamily.Color_Main,
    borderRadius: 10,
    shadowColor: '#000',
    padding: sizing.SPACING
  },
  data:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap: sizing.SUB_SPACING
  },
  location:{
    marginLeft: sizing.SUB_SPACING,
    backgroundColor: colorFamily.SUb_Secondary,
    padding: 5,    
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',     
    gap: sizing.SUB_SPACING,  
  },
  title: {
    fontFamily: fontFamily.Inter_500Medium,
    fontSize: fontSize.medium,    
  },
  reason: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small
  },
  time: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small
  },
  date: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small
  },
  CardContainer:{
    marginTop: sizing.SPACING * 2,  

  },
  status: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small,
    color: colorFamily.Primary,
  },
  DocContainer: {
    flexDirection: 'row',      
    alignItems: 'center',  
    gap: sizing.SUB_SPACING,  
  },
  schedule: {
    fontFamily: fontFamily.Inter_500Medium,
    fontSize: fontSize.normal,    
    marginBottom: sizing.SPACING ,
  }
})