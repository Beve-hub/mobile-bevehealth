import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colorFamily } from '../constant';
import { useNavigation } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
// Import the param list

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookSession'>;

const CustomCalendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | undefined>(undefined);
  const navigation = useNavigation<NavigationProp>(); // Use the correct navigation type

  const onDateChange = (date: Date) => {
    setSelectedStartDate(date);
    navigation.navigate('BookSession'); // Pass the date correctly
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        previousComponent={<FontAwesome name="angle-left" size={24} color="black" style={{ marginHorizontal: 10 }} />}
        nextComponent={<FontAwesome name="angle-right" size={24} color="black" style={{ marginHorizontal: 10 }} />}
        selectedDayColor="#008C73"
        customDatesStyles={(date) => {
          if (date.getDate() === 30) {
            return {
              style: {
                backgroundColor: colorFamily.Color_Red,
              },
              textStyle: {
                color: colorFamily.Color_SUB_MAIN_Text,
              },
              disabled: true,
            };
          }
          return {};
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
});

export default CustomCalendar;
