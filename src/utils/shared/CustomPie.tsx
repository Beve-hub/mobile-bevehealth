import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts';
import { colorFamily, fontFamily, sizing } from '../constant';


// Function to render the colored dots in the legend
const renderDot = (color: string) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 6,
      }}
    />
  );
};

const CustomPie = () => {
    const pieData = [
        {value: 54, color: '#177AD5', text: '64%'},       
        {value: 20, color: '#ED6665', text: '36%'},
    ];

  return (
    <View style={styles.container}>
       <PieChart             
            radius={100}  
            data={pieData}           
            textColor="black"           
            textSize={20}
            focusOnPress           
            textBackgroundRadius={26}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: sizing.SPACING*2,
            gap:sizing.SPACING
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',              
              marginRight: sizing.SUB_SPACING,
            }}>
            {renderDot('#006DFF')}
            <Text style={{color: colorFamily.Color_MAIN_Text, fontFamily:fontFamily.Inter_600SemiBold}}>Male: 64%</Text>
          </View>          
          <View
            style={{flexDirection: 'row', alignItems: 'center', }}>
            {renderDot('#FF7F97')}
            <Text style={{color: colorFamily.Color_MAIN_Text,fontFamily:fontFamily.Inter_600SemiBold}}>Female: 36%</Text>
          </View>
        </View>
        
    </View>
  );
};

export default CustomPie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
