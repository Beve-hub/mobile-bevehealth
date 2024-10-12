import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { colorFamily, fontFamily, fontSize, sizing } from '../../../utils/constant';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButtonFilled from '../../../utils/shared/CustomButtonFilled';

// Define navigation types
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookSession'>;
type PatientDetailsRouteProp = RouteProp<RootStackParamList, 'DocDetails'>;

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
        {/* Other content here */}

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
});
