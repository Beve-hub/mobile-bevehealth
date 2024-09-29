import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { fontFamily, fontSize } from '../constant';

const data = [
  { value: 10, label: 'Mon' },
  { value: 25, label: 'Tue' },
  { value: 30, label: 'Wed' },
  { value: 15, label: 'Thu' },
  { value: 20, label: 'Fri' },
  { value: 30, label: 'Sat' },
  { value: 5, label: 'Sun' },
];

const CustomGraph = () => {
  return (
    <View >
      <Text style={styles.title}>Analysis</Text>
      <BarChart 
        data={data}
        maxValue={30} // Max value for the chart
        barWidth={30} // Width of the bars
        barBorderRadius={4} // Optional styling for bars
        noOfSections={6} // Divide the y-axis into sections
        isAnimated // Animation option
        frontColor="#008C73" // Green color for the bars
        yAxisThickness={2} // Thickness of y-axis line
        xAxisThickness={2} // Thickness of x-axis line
      />
    </View>
  );
};

export default CustomGraph;

const styles = StyleSheet.create({
  
  title: {
    fontSize: fontSize.Sub_medium,
    marginBottom: 16,    
    fontFamily: fontFamily.Inter_600SemiBold,
  },
});
