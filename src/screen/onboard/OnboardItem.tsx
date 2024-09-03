import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { slide, SlideItem } from '../../utils/data';
import { colorFamily, fontFamily, sizing } from './../../utils/constant';

interface SlideItemProps {
    item: SlideItem;
    current: number;
    slideLength: number;
    scrollTo: () => void;
  }

const OnboardItem = ({ item, current, slideLength, scrollTo }: SlideItemProps) => {
  return (
    <View style={styles.slide}>
    {/* Top Section with Image */}
    <View style={styles.topSection}>
      <Image source={item.image} style={styles.image} />
    </View>

    {/* Bottom Section with Green Background */}
    <View style={styles.bottomSection}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>

        <View style={styles.control}>
             {/* Pagination */}
      <View style={styles.pagination}>
        {slide.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              current === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={scrollTo}>
        <Text style={styles.nextButtonText}>
          {current < slideLength - 1 ? <AntDesign name="right" size={20} color="black" /> : <MaterialIcons name="check" size={24} color="black" />}
        </Text>
      </TouchableOpacity>
        </View>
     
    </View>
  </View>
);
};

export default OnboardItem

const styles = StyleSheet.create({
    slide: {
      width: sizing.SCREEN_WIDTH,
      flex: 1,
      justifyContent: 'flex-end',
    },
    topSection: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomSection: {      
      backgroundColor: colorFamily.Primary,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: 20,
      paddingTop: 40,
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 300
    },
    image: {
      width: sizing.SCREEN_WIDTH,
      height: 200,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      fontFamily: fontFamily.Inter_700Bold,
      marginBottom: 10,
    },
    description: {      
      color: '#fff',
      textAlign: 'center',      
      fontFamily: fontFamily.Inter_300Light,
      marginBottom: 20,
    },
    control: {
        position: 'absolute',
        bottom: 30,        
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    dot: {
      height: 8,
      width: 8,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#fff',
      width:30
    },
    inactiveDot: {
      backgroundColor: '#cccccc',
    },
    nextButton: {
      backgroundColor: '#fff',
      justifyContent:'center',
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 10,      
      marginLeft: 20,
      width:50,
      height:50,
      borderRadius: 30,
    },
  
  });