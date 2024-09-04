import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colorFamily } from '../constant';

interface FilledButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const CustomButtonFilled = ({ title, onPress, buttonStyle, textStyle, disabled = false }: FilledButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.disabled]}
      onPress={onPress}    
      activeOpacity={0.6}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtonFilled

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorFamily.Primary,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {     
    textAlign: 'center',
    lineHeight: 22,  
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#9E9E9E',
  },
})