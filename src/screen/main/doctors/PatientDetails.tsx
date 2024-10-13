import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView,Modal,TextInput } from 'react-native'
import React, { useMemo, useState } from 'react'
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import LabReport from './LabReport';
import DocReport from './DocReport';
import CustomInput from '../../../utils/shared/CustomInput';
import CustomImage from '../../../utils/shared/CustomImage';


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type PatientDetailsRouteProp = RouteProp<RootStackParamList, 'PatDetails'>;

const vitals =[ 
  {
    icon:<FontAwesome5 name="temperature-high" size={18} color={colorFamily.Primary} />,
    title: 'Temp',
    value: '98.6',
    unit: '°F',
  },
  {
    icon:<FontAwesome6 name="heart-pulse" size={18} color={colorFamily.Primary} />,
    title: 'Pulse Rate',
    value: '72',
    unit: 'bpm',
  },
  {
    icon:<FontAwesome5 name="lungs" size={18} color={colorFamily.Primary} />,
    title: 'Resp Rate',
    value: '16',
    unit: 'B/M',
  },
  {
    icon:<MaterialCommunityIcons name="blood-bag" size={18} color={colorFamily.Primary} />,
    title: 'Pressure',
    value: '120/80',
    unit: 'mmHg',
  },
  {
    icon:<Fontisto name="blood-drop" size={18} color={colorFamily.Primary} />,
    title: 'Blood Rate',
    value: '80',
    unit: 'mg/dL',
  },
]

const PatientDetails = () => {
    const route = useRoute<PatientDetailsRouteProp>();
    const { documentData } = route.params;
    const navigation = useNavigation<NavigationProp>();
    const [activeTab, setActiveTab] = useState('LabReport'); // Tab state
    const [modalVisible, setModalVisible] = useState(false);
    const initials = documentData.name
      .split('')
      .map((word: string) => word.charAt(0))
      .join('')
      .substring(0, 2);

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const randomColor = useMemo(() => getRandomColor(), []);

    const handleImageUpload = (imageUri: string) => {
      // This function is called with the image URI after selection
      console.log('Selected image URI:', imageUri);
      // Add logic here, such as uploading the image or storing it in state
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Patient Details</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={[styles.profilePic, { backgroundColor: randomColor }]}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.name}>{documentData.name}</Text>
            <View style={styles.age}>
              <Text style={styles.text}>Male</Text>
              <Entypo name="dot-single" size={24} color="black" style={styles.text} />
              <Text style={styles.text}>23yrs</Text>
            </View>
            <View>
              <Text style={styles.text}>ID: BF636429</Text>
            </View>
          </View>
        </View>

        <View style={styles.vitalsContainer}>
          <Text style={styles.vitalsTitle}>Vitals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vitalsScroll}>
            {vitals.map((item, index) => (
              <View key={index} style={styles.vitalItem}>
                <View style={styles.icon}>{item.icon}</View>
                <Text style={styles.vitalTitle}>{item.title}</Text>
                <Text style={styles.vitalValue}>{item.value} {item.unit}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        
        <View >
         
     
      <View style={styles.tabContainer}>
      <TouchableOpacity 
       onPress={() => setActiveTab('LabReport')} 
       style={[styles.tabButton, activeTab === 'LabReport' && styles.activeTab]}>
        <Text style={[styles.buttonTexts, activeTab === 'LabReport' && styles.activeTabText]}>
          Lab Report
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => setActiveTab('DoctorsReport')} 
        style={[styles.tabButton, activeTab === 'DoctorsReport' && styles.activeTab]}>
        <Text style={[styles.buttonTexts, activeTab === 'DoctorsReport' && styles.activeTabText]}>
          Doctors Report
        </Text>
      </TouchableOpacity>

      </View>

        {/* Footer with New Book button */}
       <View style={styles.footer}>
        <TouchableOpacity style={styles.buttons} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>New Book</Text>
        </TouchableOpacity>
      </View>


      <View >
        {activeTab === 'LabReport' ? (
         <LabReport/>
        ) : (
          <DocReport/>
        )}
      </View>

     
        {/* Modal for New Book */}
       <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>New Report Upload</Text>
            <CustomInput label='Specialist Name'  />
            <CustomInput label='Report Type'  />
            <CustomImage label="Profile Picture" onImageUpload={handleImageUpload} />
            <CustomInput label='Observation'  />
            
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalbuttons} onPress={() => handleImageUpload}>
                <Text style={styles.modalbuttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default PatientDetails

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    height: sizing.SCREEN_HEIGHT,
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
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizing.SPACING,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: sizing.SPACING, // Optional: Add bottom padding
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: sizing.SPACING,
    alignItems: 'center',
    padding: sizing.SPACING,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  initials: {
    fontSize: fontSize.large,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    letterSpacing: -0.5,
    textTransform: 'uppercase',
  },
  age: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: fontSize.small,
    color: '#666',
  },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizing.MINI_SPACING,
  },
  text: {
    color: colorFamily.Color_MAIN_Texting,
  },
  name: {
    fontFamily: fontFamily.Inter_700Bold,
    fontSize: fontSize.normal,
  },
  vitalsTitle: {
    fontFamily: fontFamily.Inter_700Bold,
    fontSize: fontSize.normal,
    marginBottom: sizing.SPACING,
  },
  vitalsScroll: {
    paddingHorizontal: sizing.SPACING,
    backgroundColor:colorFamily.Color_Main,    
    padding: sizing.SUB_SPACING,
    borderRadius: sizing.SUB_SPACING
  },
  vitalItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sizing.SPACING,
  },
  icon: {
    backgroundColor: colorFamily.SUb_Secondary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizing.MINI_SPACING,
  },
  vitalTitle: {
    fontSize: fontSize.Sub_small,
    fontFamily: fontFamily.Inter_400Regular,
    color: colorFamily.Color_MAIN_Texting,
  },
  vitalValue: {
    fontSize: fontSize.medium,
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_500Medium,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: sizing.SPACING,
  },
  tabButton: {
    flex: 1,
    padding: sizing.SUB_SPACING,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor:colorFamily.Primary, 
    color: colorFamily.Color_SUB_MAIN_Text, 
    borderRadius:sizing.SUB_SPACING   
  },
 
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    padding: sizing.SPACING,
    borderRadius: 10,
  },
  modalTitle: {
    fontFamily: fontFamily.Inter_700Bold,
    fontSize: fontSize.normal,
    marginBottom: sizing.SPACING,
  },
  input: {
    borderWidth: 1,
    borderColor: colorFamily.Color_Main,
    padding: sizing.SUB_SPACING,
    marginBottom: sizing.SPACING,
    borderRadius: 5,
  },
  modalActions: {
    flexDirection: 'row',
    gap: sizing.SUB_SPACING,
     justifyContent: 'space-between',
     alignItems: 'center'
  },
  activeTabText: {
    color: 'white',  // Set text color to white
  },
  button: {
    backgroundColor:colorFamily.Primary, 
    padding: sizing.MINI_SPACING,
    borderRadius: 5,
    
  },
  buttons: {
    backgroundColor:colorFamily.Primary, 
    padding: sizing.MINI_SPACING,
    borderRadius: sizing.MINI_SPACING,
    
  },
  buttonText: {
    color: colorFamily.Color_SUB_MAIN_Text, 
    fontSize: fontSize.medium
  },
  buttonTexts: {
    color: colorFamily.Primary, 
    fontSize: fontSize.medium
  },
  modalbuttons: {
    fontSize: fontSize.medium,
    backgroundColor: colorFamily.Primary,
    padding: sizing.SUB_SPACING,
    borderRadius: 5,
    marginTop: sizing.SUB_SPACING,
    marginBottom: sizing.SUB_SPACING,
    marginLeft: sizing.MINI_SPACING,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
 

  modalbuttonText: {
    color: colorFamily.Color_SUB_MAIN_Text, 
    fontSize: fontSize.medium,
    textAlign:'center'
  },
  footer:{
    marginVertical: sizing.SUB_SPACING,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }, 
  vitalsContainer: {
    marginBottom: sizing.SPACING,
  }
});
