import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext';
import { StyleSheet, View } from 'react-native';
import { ThemeType } from '../../types/themeTypes';

export const PostListSeparator = () => {
  const styles = styleSheet(useContext(AppContext));

  return (
    <View style={styles.separator}>

    </View>
  )
}

const styleSheet = (theme:ThemeType) => StyleSheet.create({
  separator: {
    width: '70%',
    borderWidth: 0.8,
    borderColor: theme.colors.shadow,
    alignSelf: 'center',
    opacity: 0.5
  },

})
