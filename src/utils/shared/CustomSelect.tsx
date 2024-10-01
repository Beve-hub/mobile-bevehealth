import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, TextInput, useTheme } from 'react-native-paper';
import { colorFamily } from '../constant';

type CustomSelectProps = {
 
  options: string[];
  onSelect: (value: string) => void;
  value: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({  options, onSelect, value }) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    closeMenu();
  };

  return (
    <View >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TextInput
         
            value={value}
            onFocus={openMenu} // Open menu when input is focused
            mode="outlined"
            right={<TextInput.Icon icon="menu-down" />} // Corrected here
            style={styles.input}
            theme={{
              ...theme,
              colors: {
                ...theme.colors,
                // Override the active color
                primary: colorFamily.Primary, // Change this to your desired active color
              },
            }}
          />
        }
      >
        {options.map((option, index) => (
          <Menu.Item key={index} onPress={() => handleSelect(option)} title={option} />
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  
  input: {
    backgroundColor: colorFamily.Color_Transaparent,
  },
});

export default CustomSelect;
