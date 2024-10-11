import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper'; 
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant';
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomCalendar from '../../../utils/shared/CustomCalendar';
import CustomGraph from '../../../utils/shared/CustomGraph';
import CustomPie from '../../../utils/shared/CustomPie';

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

const DocHome = (props: Props) => {
  const navigate = useNavigation();
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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
      >
        <TouchableOpacity activeOpacity={0.6} style={styles.content}>
          <View style={styles.container}>
            <Ionicons name="notifications-sharp" size={24} color={colorFamily.Color_MAIN_Text} />
          </View>
        </TouchableOpacity>
        
        <LinearGradient
          colors={[colorFamily.Gradient_Green_Grey[0], colorFamily.Gradient_Green_Gray[1]]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <View>
            <Text style={styles.title}>Welcome</Text>
            <View>
              <Text style={styles.name}>Dr. Victor Okeke</Text>
              <Text style={styles.text}>Your health is our Priority, stay alive</Text>
            </View>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.Name}>Membership ID</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View>
          <View style={styles.document}>
            <Text style={styles.title}>Document</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.all}>See All</Text>
            </TouchableOpacity>
          </View>
          {data.slice(0,1).map((item, index) => (
            <View key={index} style={styles.buttonContainer}>
            <View style={styles.DocContainer}>
              <SimpleLineIcons name="folder" size={24} color="black" />
              <View>
                <Text>{item.name}</Text>
                <Text>{item.reason}</Text>
              </View>
            </View>      
            <TouchableOpacity activeOpacity={0.6} style={styles.download}>
              <AntDesign name="download" size={24} color="black" />
            </TouchableOpacity>    
          </View>
          ))}
          
        </View>


        <View>          

          <CustomCalendar/>
          <View style={styles.documents}>
            <Text style={styles.title}>Appointment</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.all}>See All</Text>
            </TouchableOpacity>
          </View>
          {data.slice(0,1).map((item, index) => (
            <TouchableOpacity key={index} style={styles.buttonContainer} onPress={() => showModal(item)}>
            <View style={styles.DocContainer}>             
              <View>
                <Text style={styles.titles}>{item.name}</Text>
                <Text style={styles.reason}>{item.reason}</Text>
              </View>
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
        <View style={styles.gender}>
        <View style={styles.document}>
            <Text style={styles.title}>Gender</Text>            
          </View>
        <CustomPie/>
        </View>

        <View style={styles.gender}>
        <View style={styles.document}>
            <Text style={styles.title}>Analysis</Text>            
          </View>
        <CustomGraph />
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
  );
}

export default DocHome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: sizing.SPACING,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: sizing.SPACING, // Optional: Add bottom padding
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: sizing.SPACING,

  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 4,
    backgroundColor: colorFamily.Color_icon,    
  },
  gradient: {    
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizing.SPACING,
    borderRadius: 10,
  },
  title: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.medium,
  },
  name: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_800ExtraBold,
    fontSize: fontSize.Sub_Normal,
  },
  text: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.medium,
  },
  Button: {
    backgroundColor: colorFamily.Primary,
    paddingHorizontal: sizing.SUB_SPACING,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 10,
    marginTop: sizing.SPACING,   
    color: colorFamily.Color_SUB_MAIN_Text,
  },
  Name: {
    color: colorFamily.Color_SUB_MAIN_Text,
  },
  document: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: sizing.SPACING,
  },
  documents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sizing.SPACING *2,
    paddingBottom: sizing.SPACING ,
  },
  all: {
    color: colorFamily.Primary,    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: sizing.SUB_SPACING ,
    alignItems:'center',  
    backgroundColor: colorFamily.Color_Main,
    borderRadius: 10,
    shadowColor: '#000',
    padding: sizing.SPACING
  },

  DocContainer: {
    flexDirection: 'row',      
    alignItems: 'center',
    gap: sizing.SUB_SPACING,  
  },
  download: {
    marginLeft: sizing.SUB_SPACING,
    backgroundColor: colorFamily.SUb_Secondary,
    padding: 5,    
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',     
    gap: sizing.SUB_SPACING,  
  },
  location:{
    flexDirection: 'column',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  titles: {
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
  data:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap: sizing.SUB_SPACING
  },
  status: {
    fontFamily: fontFamily.Inter_400Regular,
    fontSize: fontSize.Sub_small,
    color: colorFamily.Primary,
  },
  gender: {
    marginVertical: sizing.SPACING*2,
    marginBottom: sizing.SPACING*2,
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
});
