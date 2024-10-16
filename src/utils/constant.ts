import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const sizing = {
  SPACING: 20,
  SUB_SPACING: 10,
  MINI_SPACING: 5,
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SCREEN_INPUT: width - 20,
  SCREEN_INPUTS: width - 40,
  SCREEN_BUTTON: width - 80,
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

export const fontSize = {
  small: 10,
  Sub_small: 12,
  medium: 14,
  Sub_medium: 16,
  normal: 18,
  Sub_Normal: 20,
  large: 24,
  Sub_large: 28,
  Extra_large: 32,
  Extra_Extra_large: 48,
};

export const colorFamily = {
  Primary: "#008C73",
  Secondary: "#4ECBB4",
  SUb_Secondary: "#4ECBB460",
  Color_MAIN_Text: "#121212",
  Color_MAIN_Texting: "#12121280",
  Color_SUB_MAIN_Text: "#ffff",
  Color_Main: "#D9D9D9",
  Color_SUB: "#E0E0E0",
  Color_Red: "#FF0000",
  Color_icon: "#12121210",
  Color_Transaparent: "transparent",
  Gradient_Green_Gray: ['#008C73', '#D9D9D9'],
  Gradient_Green_Grey: ['#4ECBB4', '#D9D9D9'],
};