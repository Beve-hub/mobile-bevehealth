import React, { useState } from 'react';
import { View, StyleSheet, TextStyle, ViewStyle, Text } from 'react-native';
import { TextInput as PaperTextInput,useTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; // Import Expo vector icons
import { colorFamily } from '../constant'; // Custom color family

interface TextInputWithIconProps {
  label?: string;
  labelStyle?: TextStyle;
  iconRight?: keyof typeof MaterialIcons.glyphMap; // Type-safe way to use Material Icons
  iconPosition?: 'right';
  isPassword?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconStyle?: TextStyle;
  placeholder?: string; // Add this line to include the placeholder prop
  keyboardType?: string; // Include any other props you need
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'; // Add other props as needed
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
  placeholder, // Add placeholder here
  keyboardType,
  autoCapitalize,
  ...rest
}: TextInputWithIconProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Controls visibility of password
  const [text, setText] = useState(''); // Stores text value
  const theme = useTheme();
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* TextInput */}
      <PaperTextInput
        mode="outlined"
        value={text}
        onChangeText={setText}
        secureTextEntry={isPassword && !passwordVisible}
        placeholder={placeholder} // Use the placeholder prop here
        right={
          isPassword ? (
            <PaperTextInput.Icon
              icon={({ color, size }) => (
                <MaterialIcons
                  name={passwordVisible ? 'visibility' : 'visibility-off'}
                  size={size}
                  color={color}
                />
              )}
              onPress={togglePasswordVisibility}
              forceTextInputFocus={false} // Ensure text input doesn't lose focus when toggling
            />
          ) : iconRight && iconPosition === 'right' ? (
            <PaperTextInput.Icon
              icon={({ color, size }) => (
                <MaterialIcons name={iconRight} size={size} color={color} />
              )}
            />
          ) : null
        }
        style={[styles.input, inputStyle]}
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            // Override the active color
            primary: colorFamily.Primary, // Change this to your desired active color
          },
        }}
        autoCapitalize={autoCapitalize} // Add auto capitalize prop if needed
        {...rest}
      />
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
  input: {
    fontSize: 16,
  },
});
