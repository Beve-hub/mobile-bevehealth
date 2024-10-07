import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { colorFamily } from '../constant';

interface FilledButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  compact?: boolean;
  contentStyle?: ViewStyle; // For adjusting padding
  backgroundColor?: string;
  textColor?: string;
}

const CustomButtonFilled = ({ title, onPress, buttonStyle, textStyle, disabled = false, compact = false, contentStyle, backgroundColor = colorFamily.Primary, textColor = '#FFFF' }: FilledButtonProps) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      disabled={disabled}
      style={[styles.button,{backgroundColor}, buttonStyle]}
      contentStyle={[styles.content, contentStyle]} // Allows adjustment of padding
      labelStyle={[styles.text,{color: textColor}, textStyle]}
      compact={compact} // Adjusts size for compact variant
    >
      {title}
    </Button>
  );
};

export default CustomButtonFilled;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
  },
  content: {
    paddingHorizontal: 10,
     },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
