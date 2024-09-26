import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant'
import CustomCalendar from '../../../utils/shared/CustomCalendar'


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
    name: 'David D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  {
    name: 'David D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  {
    name: 'David D',
    date: '2022/03/10',
    reason: 'DNA Test',
    time: '10:00 AM ',
    status: 'confirm'
  },
  // Add more appointment data as needed
]

const DocCalender = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Appointment</Text>
      <CustomCalendar/>
      
      <View style={styles.CardContainer}>
        <Text style={styles.schedule}>Recent Schedule</Text>
        {data.map((item, index) => (
          <View key={index} style={styles.appointment}>
            <View >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.reason}>{item.reason}</Text>
            </View>
            
            <View style={styles.location}>
            <Text style={styles.status}>{item.status}</Text>
            <View style={styles.data}>                      
            <Text style={styles.time}>{item.time}</Text> 
            <Text style={styles.date}>{item.date}</Text>             
            </View>
            </View>
           
          </View>
        ))}
      </View>
      </ScrollView>      
    </SafeAreaView>
  )
}

export default DocCalender

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
    flexDirection: 'column',
    justifyContent:'flex-end',
    alignItems:'flex-end',
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
  schedule: {
    fontFamily: fontFamily.Inter_500Medium,
    fontSize: fontSize.normal,    
    marginBottom: sizing.SPACING ,
  }
})