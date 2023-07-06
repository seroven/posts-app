/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useEffect, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SplashScreen} from './src/screens/SplashScreen';
import {darkTheme, lightTheme} from './src/theme/theme';
import {CustomStatusBar} from './src/components/CustomStatusBar';
import {PostsScreen} from './src/screens/posts/PostsScreen';
import { AppContext } from './src/contexts/AppContext';

function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [theme, setTheme] = useState(
    useColorScheme() == 'dark' ? darkTheme : lightTheme,
  );



  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <CustomStatusBar showSplash={showSplash} />
        <PostsScreen />
        <SplashScreen showSplash={showSplash} />
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
