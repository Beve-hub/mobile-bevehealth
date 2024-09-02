import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { sizing, fontFamily } from '../../utils/constant';
import { slide } from '../../utils/data';

interface Props {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
}

const OnboardItem = ({ item }: Props) => {
  return (
    <SafeAreaView>
      {slide.map((item, index) => (
        <View key={item.id || index} style={styles.container}>
          <Image source={{ uri: item.image }} alt="" style={styles.image} />
          <View>
            <Text style={styles.title}>
              {index + 1}. {item.title}
            </Text>
            <Text style={styles.description}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default OnboardItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizing.SPACING,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT,
  },
  image: {
    justifyContent: 'center',
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: '#121212',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fontFamily.Inter_700Bold,
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  form: {
    width: '100%',
    marginTop: 30,
  },
});
