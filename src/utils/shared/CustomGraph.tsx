import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { fontFamily, fontSize } from '../constant';

const data = [
  { value: 5, label: 'S' },
  { value: 10, label: 'M' },
  { value: 25, label: 'T' },
  { value: 30, label: 'W' },
  { value: 15, label: 'T' },
  { value: 20, label: 'F' },
  { value: 30, label: 'S' },
  
];

const CustomGraph = () => {
  return (
    <View >
      
      <BarChart 
        data={data}
        maxValue={30} // Max value for the chart
        barWidth={25} // Width of the bars
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


