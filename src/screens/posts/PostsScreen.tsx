import React, { useContext } from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContext } from '../../contexts/AppContext';
import { ThemeType } from '../../types/themeTypes';

export const PostsScreen = () => {
  const styles = styleSheet(useContext(AppContext));

  return <View style={styles.container}>
    <Text style={styles.title}>Posts</Text>
  </View>;
};

const styleSheet = (theme:ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.text,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.bigTitle,
    width: '100%',
    textAlign: 'center'
  }
})