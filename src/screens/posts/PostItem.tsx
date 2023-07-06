import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../../contexts/AppContext';
import {ThemeType} from '../../types/themeTypes';
import {PostType} from '../../types/postsTypes';

interface props {
  item: PostType;
}

export const PostItem: React.FC<props> = ({item}) => {
  const styles = styleSheet(useContext(AppContext));

  return (
    <View style={[styles.container, styles.shadow]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body}</Text>
    </View>
  );
};

const styleSheet = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: '90%',
      alignSelf: 'center',
      marginVertical: 20,
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      padding: 12,
      elevation: 6,
    },
    shadow: {
      shadowColor: theme.colors.shadow,
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    title: {
      fontSize: theme.fontSizes.title,
      color: theme.colors.highlight,
      textAlign: 'center',
      fontWeight: theme.fontWeights.semibold,
      marginBottom: 4,
    },
    description: {
      fontSize: theme.fontSizes.body,
      color: theme.colors.text,
      textAlign: 'justify'
    }
  });
