import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts';


const CustomPie = () => {
    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 40, color: '#79D2DE', text: '30%'},
        {value: 20, color: '#ED6665', text: '26%'},
    ];
  return (
    <View style={styles.container}>
       <PieChart
            donut  
            radius={100}     
            innerRadius={80}               
            data={pieData}
            centerLabelComponent={() => {
                return <Text style={{fontSize: 30}}>70%</Text>;
                }}
            />
    </View>
  )
}

export default CustomPie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})