import { FlatList, ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { slide } from './../screen/utils/data';
import Paginator from './../screen/onboard/Paginator';
import NextButton from './../screen/onboard/NextButton';
import OnboardItem from './../screen/onboard/OnboardItem';

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  
  const SlidesRef = useRef<FlatList>(null);

  const scrollTo = () => {
    if (current < slide.length - 1 && SlidesRef.current) {
      SlidesRef.current.scrollToIndex({ index: current + 1 });
      setCurrent(current + 1);
    } else {
      console.log('Last item.');
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView>
        <FlatList
          data={slide}
          ref={SlidesRef}
          renderItem={({ item }) => <OnboardItem item={item} />}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
            setCurrent(index);
          }}
        />
      </ScrollView>
      <Paginator data={slide} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    position: 'absolute',
    color: "#B40404",
    borderRadius: 100,
    left: 20,
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 20,
  },
});
