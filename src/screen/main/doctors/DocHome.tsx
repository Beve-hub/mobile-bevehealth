import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient'; // Importing LinearGradient
import { colorFamily, sizing } from '../../../utils/constant';

type Props = {}

const DocHome = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity activeOpacity={0.6} style={styles.content}>
        <View style={styles.container}>
          <Ionicons name="notifications-sharp" size={30} color={colorFamily.Color_MAIN_Text} />          
        </View>
      </TouchableOpacity>
      
      <LinearGradient 
        colors={[colorFamily.Gradient_Green_Gray]} 
        style={styles.gradient} // Applying styles to the gradient
      >
        {/* You can place more content here if needed */}
      </LinearGradient>
    </SafeAreaView>
  );
}

export default DocHome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING, // Optional padding
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Aligns the content to the bottom if needed
    alignItems: 'flex-end', // Aligns the button to the right
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    padding: 4,
    backgroundColor: colorFamily.Color_icon,
    width: 40, // Fixed width of 40px
  },
  gradient: {
    flex: 1, // Optional: Adjust size to fill space
    padding: sizing.SPACING,
  }
});
