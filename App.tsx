// App.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useFonts,  
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black, } from '@expo-google-fonts/inter';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/app/store';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message';


const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  Colors: {
     ...DefaultTheme.colors,
     
    },
  }

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Preload any data if necessary
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);        
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    console.log("app is not ready");
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
    <ReduxProvider store={store}>
      <StatusBar />
      <PaperProvider theme={theme}>        
          <AppNavigator />       
      </PaperProvider>
      <FlashMessage
          position='bottom'
          icon='auto'
          animated={true}
          duration={4000}
          floating={true}
        />
    </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
