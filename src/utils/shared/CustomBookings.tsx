import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colorFamily, fontFamily, fontSize, sizing } from '../constant';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomSelect from './CustomSelect';
import CustomDate from './CustomDate';
import CustomTime from './CustomTime';
import CustomInput from './CustomInput';
import CustomButtonFilled from './CustomButtonFilled';
import { RootStackParamList } from '../../navigation/RootStack';

// Define the navigation prop with the correct type
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CustomBookings = () => {
    // Correctly type the navigation hook
    const navigation = useNavigation<NavigationProp>();
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());

    

    const handleSelect = (value: string) => {
        setSelectedOption(value); // Update selected option
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.Header}>Book Sessions</Text>
                    </View>
                </View>
                <View style={styles.custom}>
                    <View>
                        <Text style={styles.labelText}>Select Practice</Text>
                        <CustomSelect
                            onSelect={handleSelect}
                            value={selectedOption}
                            options={['General Doctor', 'Optician', 'Cardiologist', 'Gynecologist']}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelText}>Select Date</Text>
                        <CustomDate value={selectedDate} onChange={setSelectedDate} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>Select Time</Text>
                        <CustomTime value={selectedTime} onChange={setSelectedTime} />
                    </View>
                    <View>
                        <CustomInput
                            label="Reason"
                            inputStyle={styles.customInput}
                            labelStyle={styles.labelText}
                            keyboardType="text"
                            autoCapitalize="none"
                        />
                    </View>
                </View>
                <View>
                    <CustomButtonFilled
                        title="Submit"
                        onPress={() => navigation.goBack()}
                        buttonStyle={{ paddingVertical: 5 }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CustomBookings;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: sizing.SPACING,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: sizing.SPACING,
    },
    container: {
        flexDirection: 'row',
        gap: sizing.SPACING * 3,
        paddingVertical: sizing.SPACING * 3,
    },
    Header: {
        fontFamily: fontFamily.Inter_600SemiBold,
        fontSize: fontSize.Sub_Normal,
    },
    labelText: {
        color: '#333',
        fontFamily: fontFamily.Inter_500Medium,
        fontSize: 14,
        marginVertical: sizing.SUB_SPACING,
    },
    customInput: {
        fontSize: 14,
        color: '#333',
        backgroundColor: colorFamily.Color_Transaparent,
    },
    custom: {
        flexDirection: 'column',
        marginBottom: sizing.SPACING * 2,
        gap: sizing.MINI_SPACING,
    },
    cancel: {
        flexDirection: 'column',
        textAlign: 'center',
        marginVertical: sizing.SPACING,
        fontFamily: fontFamily.Inter_500Medium,
    },
});
