/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { Animated, SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MainScreen } from './src/screens/MainScreen';
import { SplashScreen } from './src/screens/SplashScreen';
import { theme } from './src/theme/theme';
import { CustomStatusBar } from './src/components/CustomStatusBar';


function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const StatusBarAnimated = Animated.createAnimatedComponent(StatusBar);

  useEffect(() => {
    setTimeout(() => { 
      setShowSplash(false);
    }, 1000)

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar showSplash={showSplash}/>
      {/* <MainScreen/> */}
      <SplashScreen showSplash = {showSplash} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
