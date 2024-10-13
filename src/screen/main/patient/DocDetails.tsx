import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// Define navigation types
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookSession'>;
type PatientDetailsRouteProp = RouteProp<RootStackParamList, 'DocDetails'>;


interface AvaiProps{
  day: string;
  start: string;
  end: string;
} 

const availabe: AvaiProps[] = [
    {
      day: 'monday',
      start: '9am',
      end: '5pm'
    },
    {
      day: 'Wednesday',
      start: '9am',
      end: '5pm'
    },
    {
      day: 'Friday',
      start: '9am',
      end: '5pm'
    },
    {
      day: 'Saturday',
      start: '9am',
      end: '5pm'
    }
]
const DocDetails = () => {
  const route = useRoute<PatientDetailsRouteProp>();
  const { documentData } = route.params;
  const navigation = useNavigation<NavigationProp>();

  const initials = documentData.name
    .split(' ')
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
  };

  const randomColor = useMemo(() => getRandomColor(), []);

  const handleBookSession = () => {
    navigation.navigate('BookSession'); // Navigate to CustomBookings screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Patient Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
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
            <View style={styles.vitalItem}>
            <View style={styles.icon}>
              <FontAwesome6 name="user-group" size={18} color={colorFamily.Primary} />
            </View>
                <Text style={styles.vitalTitle}>Patient</Text>
                <Text style={styles.vitalValue}>{documentData.patient}</Text>
            </View>

            <View style={styles.vitalItem}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name="medical-bag" size={28} color={colorFamily.Primary} />
            </View>
                <Text style={styles.vitalTitle}>Years of Exp</Text>
                <Text style={styles.vitalValue}>{documentData.exp}</Text>
            </View>

            <View style={styles.vitalItem}>
            <View style={styles.icon}>
              <Fontisto name="star" size={22} color={colorFamily.Primary} />
            </View>
                <Text style={styles.vitalTitle}>Rating</Text>
                <Text style={styles.vitalValue}>{documentData.rate}</Text>
            </View>

            <View style={styles.vitalItem}>
            <View style={styles.icon}>
              <MaterialIcons name="location-on" size={28} color={colorFamily.Primary} />
            </View>
                <Text style={styles.vitalTitle}>Patient</Text>
                <Text style={styles.vitalValue}>{documentData.location} {documentData.state}</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>Schedule</Text>
          <View >
            {availabe.map((item, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text >{item.day}</Text>
                <Text style={styles.scheduleTime}>{item.start} - {item.end}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <CustomButtonFilled
            title="Book Session"
            onPress={handleBookSession} // Navigate on button press
            buttonStyle={{ width: sizing.SCREEN_BUTTON, paddingVertical: sizing.MINI_SPACING }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocDetails;

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: sizing.SPACING, height: sizing.SCREEN_HEIGHT },
  title: { fontFamily: fontFamily.Inter_700Bold, fontSize: fontSize.normal },
  header: { flexDirection: 'row', gap: sizing.SPACING, alignItems: 'center', marginVertical: sizing.SPACING },
  scrollContainer: { flexGrow: 1, paddingBottom: sizing.SPACING },
  ButtonContainer: { marginTop: sizing.SPACING, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizing.SPACING,
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
    borderRadius: sizing.SUB_SPACING,
    gap:20
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
  vitalsContainer: {
    marginBottom: sizing.SPACING,
  },
scheduleTitle: {
  fontFamily: fontFamily.Inter_700Bold,
  fontSize: fontSize.normal,
},
scheduleContainer: {
  marginTop: sizing.SPACING,
},
scheduleItem: {
  flexDirection: 'row',
  justifyContent:'space-between',
  gap: sizing.SPACING,
},
scheduleTime: {
  backgroundColor: colorFamily.Color_Main,
  borderRadius: sizing.MINI_SPACING
}
});
