import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Modal, Portal, Button, Provider } from 'react-native-paper'; 
import React, { useState } from 'react'
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
  const [visible, setVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const showModal = (appointment: any) => {
    setSelectedAppointment(appointment);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);
  return (
    <Provider>
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>Appointment</Text>
      <CustomCalendar/>
      
      <View style={styles.CardContainer}>
        <Text style={styles.schedule}>Recent Schedule</Text>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.appointment} onPress={() => showModal(item)}>
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
           
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>  
      <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            {selectedAppointment && (
              <View>
                <Text style={styles.modalTitle}>Appointment Details</Text>
                <Text style={styles.modalText}>Name: {selectedAppointment.name}</Text>
                <Text style={styles.modalText}>Reason: {selectedAppointment.reason}</Text>
                <Text style={styles.modalText}>Date: {selectedAppointment.date}</Text>
                <Text style={styles.modalText}>Time: {selectedAppointment.time}</Text>
                <Text style={styles.modalText}>Status: {selectedAppointment.status}</Text>
                <Button mode="contained" onPress={hideModal} style={styles.closeButton}>
                  Close
                </Button>
              </View>
            )}
          </Modal>
        </Portal>    
    </SafeAreaView>
    </Provider>
  )
}

export default DocCalender

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    height:sizing.SCREEN_HEIGHT
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
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: sizing.SPACING,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.normal,
    marginBottom: sizing.SUB_SPACING,
  },
  modalText: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small,
    marginBottom: sizing.SUB_SPACING,
  },
  closeButton: {
    marginTop: sizing.SPACING,
    backgroundColor: colorFamily.Primary,
  },
})