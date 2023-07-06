import { Colors } from "react-native/Libraries/NewAppScreen"
import { ThemeType, BaseThemeType} from '../types/themeTypes';

const baseTheme :BaseThemeType= {
  fontSizes: {
    body: 14,
    title: 16,
    bigTitle: 28
  },
  fontWeights: {
    light: '200',
    regular: '400',
    semibold: '500',
    bold: 'bold'
  }
}

export const lightTheme : ThemeType = {
  ...baseTheme,
  colors: {
    primary: '#47b5ff',
    primaryVariant: '#06283d',
    highlight: '#1d73e5',
    secondary: '#ffc738',
    secondaryVariant: '#ffa700',
    background: Colors.lighter,
    text: '#444',
    shadow: '#555'
  }
}

export const darkTheme : ThemeType = {
  ...baseTheme,
  colors: {
    primary: '#47b5ff',
    primaryVariant: '#06283d',
    highlight: '#1d73e5',
    secondary: '#ffc738',
    secondaryVariant: '#ffa700',
    background: Colors.darker,
    text: '#fff',
    shadow: '#ddd'
  }
}