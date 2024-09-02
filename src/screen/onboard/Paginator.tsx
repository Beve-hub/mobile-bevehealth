import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import React from "react";

// Define the Props interface
interface Props {
  data: Array<any>; // This could be more specific depending on the structure of your data
  scrollX: Animated.Value; // Assuming scrollX is an Animated.Value
}

const Paginator: React.FC<Props> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: 10, opacity }]}
            key={i.toString()} // Fix the key
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: "#ffff",
    marginHorizontal: 8,
  },
});
