import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colorFamily, sizing } from '../constant';

interface DateInputProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

const CustomDate: React.FC<DateInputProps> = ({ value, onChange }) => {
    const [show, setShow] = useState(false);

    const showDatepicker = () => {
        setShow(true);
    };

    const onDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || value;
        setShow(false);
        if (currentDate) {
            onChange(currentDate);
        }
    };

    return (
        <View style={{borderWidth:1, padding:sizing.MINI_SPACING *3, borderRadius:sizing.MINI_SPACING, borderColor:colorFamily.Color_MAIN_Texting }}>
            <TextInput
                value={value ? value.toLocaleDateString() : ''}
                placeholder="Select Date"
                onFocus={showDatepicker}
                editable={true} // Prevent manual input
                
            />
            {show && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onDateChange}
                />
            )}
        </View>
    );
};

export default CustomDate;
