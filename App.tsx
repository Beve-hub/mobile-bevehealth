// App.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/app/store';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
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
    return null;
  }

  return (
    <SafeAreaView>
    <ReduxProvider store={store}>
      <PaperProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <AppNavigator />
        </View>
      </PaperProvider>
    </ReduxProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
