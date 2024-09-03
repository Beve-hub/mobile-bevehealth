import {SafeAreaView, FlatList, StyleSheet, View, Animated, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { slide } from '../utils/data';
import Paginator from './../screen/onboard/Paginator';
import NextButton from './../screen/onboard/NextButton';
import OnboardItem from './../screen/onboard/OnboardItem';
import { colorFamily, sizing } from '../utils/constant';

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [current, setCurrent] = useState(0);
  
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
    <SafeAreaView style={styles.container}>
     
        <Text style={styles.skip}>Skip</Text>
      
      <FlatList
        data={slide}
        ref={SlidesRef}
        renderItem={({ item }) => <OnboardItem item={item} current={current} slideLength={slide.length} scrollTo={scrollTo} />}
        horizontal
        keyExtractor={(item) => item.id.to}
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
      
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  skip: {
    position: 'absolute',
    color: colorFamily.Primary,    
    fontWeight: 'bold',
    fontSize: 15,
    top: 50,
    right: sizing.SPACING,
    zIndex: 999,
    alignSelf: 'flex-end',
    transform: [{ translateX: -20 }],
    shadowColor: '#000',

  },
});
