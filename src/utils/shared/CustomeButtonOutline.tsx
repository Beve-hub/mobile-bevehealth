import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colorFamily } from '../constant';

interface OutlinedButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const CustomeButtonOutline = ({ title, onPress, buttonStyle, textStyle, disabled = false }: OutlinedButtonProps) => {
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

export default CustomeButtonOutline

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: colorFamily.Primary,
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
      },
      text: {
        color: colorFamily.Primary,
        fontSize: 16,
        fontWeight: 'bold',
      },
      disabled: {
        borderColor: '#9E9E9E',
        color: '#9E9E9E',
      },
})