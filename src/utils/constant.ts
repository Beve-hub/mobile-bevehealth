import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const sizing = {
  SPACING: 20,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  STATUSBARHEIGHT: Constants.statusBarHeight,
};

export const fontFamily = {
  Inter_100Thin: 'Inter_100Thin',
  Inter_200ExtraLight: 'Inter_200ExtraLight',
  Inter_300Light: 'Inter_300Light',
  Inter_400Regular: 'Inter_400Regular',
  Inter_500Medium: 'Inter_500Medium',
  Inter_600SemiBold: 'Inter_600SemiBold',
  Inter_700Bold: 'Inter_700Bold',
  Inter_800ExtraBold: 'Inter_800ExtraBold',
  Inter_900Black: 'Inter_900Black',
};

export const colorFamily = {
  Primary: "#008C73",
  Secondary: "#4ECBB4",
  Color_MAIN_Text: "#121212",
  Color_SUB_MAIN_Text: "#ffff",
  Color_Main: "#D9D9D9",
  Color_SUB: "#E0E0E0",
  Color_Red: "#FF0000",
};