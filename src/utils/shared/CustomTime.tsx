import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colorFamily, sizing } from '../constant';

interface TimeInputProps {
  value: Date | null;
  onChange: (time: Date) => void;
}

const CustomTime = ({ value, onChange }: TimeInputProps) => {
  const [show, setShow] = useState(false);

  const showTimepicker = () => {
    setShow(true);
  };

  const onTimeChange = (event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || value;
    setShow(false);
    if (currentTime) {
      onChange(currentTime);
    }
  };

  return (
    <View style={{borderWidth:1, padding:sizing.MINI_SPACING *3, borderRadius:sizing.MINI_SPACING, borderColor:colorFamily.Color_MAIN_Texting  }}>
      <TextInput
        value={value ? value.toLocaleTimeString() : ''}
        placeholder="Select Time"
        onFocus={showTimepicker}
        editable={true}
      />
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

export default CustomTime;
