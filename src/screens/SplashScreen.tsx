import React, {useContext, useEffect, useState} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { ThemeType } from '../types/themeTypes';
import { darkTheme } from '../theme/theme';

interface props {
  showSplash: boolean;
}


export const SplashScreen: React.FC<props> = ({showSplash}) => {
  const styles = styleSheet(useContext(AppContext));
  const [fadeOut, setFadeOut] = useState<Animated.Value>(new Animated.Value(1));
  const [fadeOutImage, setFadeOutImage] = useState<Animated.Value>(new Animated.Value(1));
  useEffect(() => {
    if (!showSplash) {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start();

      Animated.timing(fadeOutImage, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  }, [showSplash]);

  return (
    <Animated.View style={[ styles.container, {opacity: fadeOut}]}>
      <Animated.Image style={[ styles.image, {opacity: fadeOutImage}]} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>PostsApp</Text>
    </Animated.View>
  );
};

const styleSheet = (theme:ThemeType) => StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
