import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontFamily, fontSize, sizing } from '../constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';

type Props = {}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const CustomChange = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> <AntDesign name="arrowleft" size={24} color="black" /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
    </SafeAreaView>
  )
}

export default CustomChange

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT,
  },
  header: {
    flexDirection: 'row',
    gap: sizing.SPACING,
    alignItems: 'center',
    marginVertical: sizing.SPACING,
  },
  title: {
    fontFamily: fontFamily.Inter_700Bold,                                                                                              
    fontSize: fontSize.normal,
  },
})