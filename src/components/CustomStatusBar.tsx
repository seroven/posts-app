import React, {useEffect, useState} from 'react';
import {Animated, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from '../theme/theme';

interface props {
  showSplash: boolean;
}

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

export const CustomStatusBar: React.FC<props> = ({showSplash}) => {
  const [statusBarColor, setStatusBarColor] = useState<Animated.Value>(new Animated.Value(0));
  const isDarkMode = useColorScheme() == 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const statusBarColorInterpolate = statusBarColor.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.highlight, backgroundColor],
  });

  useEffect(() => {
    if (!showSplash){
      Animated.timing(statusBarColor, {
        useNativeDriver: false,
        duration: 1000,
        toValue: 1,
      }).start();
    }
    
  }, [showSplash]);

  return (
    <AnimatedStatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={statusBarColorInterpolate}
    />
  );
};
