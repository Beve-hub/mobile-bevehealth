import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import FontAwesome from '@expo/vector-icons/FontAwesome';// Make sure to install react-native-vector-icons

const CustomCalendar = () => {
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);

    const onDateChange = (date: Date) => {
      setSelectedStartDate(date);
    };
  
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  
    return (
      <View style={styles.container}>
        <CalendarPicker 
          onDateChange={onDateChange}
          previousComponent={<FontAwesome name="angle-left" size={24} color="black" style={{marginHorizontal:10}} />} // Use your desired icon here
          nextComponent={<FontAwesome name="angle-right" size={24} color="black" style={{marginHorizontal:10}} />} // Use your desired icon here
        /> 
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {     
      marginTop: 50,
      paddingHorizontal:10
    },
});
export default CustomCalendar;
