import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import React, { useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';




interface NextButtonProps {
    scrollTo: () => void;
  }


const NextButton: React.FC<NextButtonProps> = ({ scrollTo }) => {

  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // No need to use `current` for Animated.Value
  const progressAnimation = useRef(new Animated.Value(0)).current;

  // You can remove `progressRef` unless you're using it somewhere else
  const progressRef = useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.button}
       
        activeOpacity={0.6}
      >
        <Text style={styles.buttonText}>
          <AntDesign name="arrowright" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    elevation: 10,
    shadowColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#008C73',
    borderRadius: 40,
    width:24,
    height: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
