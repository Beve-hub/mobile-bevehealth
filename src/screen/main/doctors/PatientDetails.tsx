import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
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

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Patient Details</Text>
        </View>

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

        <View >
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
    fontSize: fontSize.medium,
    fontFamily: fontFamily.Inter_400Regular,
    color: colorFamily.Color_MAIN_Texting,
  },
  vitalValue: {
    fontSize: fontSize.medium,
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_500Medium,
  },
 
});
