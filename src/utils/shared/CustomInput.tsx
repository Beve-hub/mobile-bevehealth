import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TextStyle, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colorFamily } from '../constant';

interface TextInputWithIconProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  iconRight?: keyof typeof MaterialIcons.glyphMap;
  iconPosition?: 'right';
  isPassword?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconStyle?: TextStyle;
}

const CustomInput = ({
  label,
  labelStyle,
  iconRight,
  iconPosition = 'right',
  isPassword = false,
  containerStyle,
  inputStyle,
  iconStyle,
  ...rest
}: TextInputWithIconProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Controls visibility of actual password
  const [text, setText] = useState(''); // Stores the actual text value

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleTextChange = (inputText: string) => {
    setText(inputText); // Update the actual text
  };

  // Mask the input with asterisks if password is hidden
  const displayText = isPassword && !passwordVisible ? '*'.repeat(text.length) : text;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* Container */}
      <View style={[styles.inputContainer, containerStyle]}>
        {/* Text Input */}
        <TextInput
          style={[styles.input, inputStyle]}
          value={displayText} // Display masked or actual text
          onChangeText={handleTextChange}
          secureTextEntry={false} // Disable default secureTextEntry as we're handling it manually
          {...rest}
        />

        {/* Right Icon */}
        {isPassword ? (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={passwordVisible ? 'visibility' : 'visibility-off'}
              size={24}
              style={[styles.icon, iconStyle]}
            />
          </TouchableOpacity>
        ) : (
          iconRight && iconPosition === 'right' && (
            <MaterialIcons name={iconRight} size={24} style={[styles.icon, iconStyle]} />
          )
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: colorFamily.Color_MAIN_Text,
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorFamily.Color_MAIN_Text,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    color: '#000',
  },
  icon: {
    color: colorFamily.Color_MAIN_Text,
  },
});
