export interface FontSizesType {
  body: number;
  title: number;
  bigTitle: number;
}

export interface FontWeightsType {
  light: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  regular: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  semibold: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  bold: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
}

export interface ColorsType {
  primary: string;
  primaryVariant: string;
  highlight: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  text: string;
  shadow: string;
}

export interface ThemeType {
  fontSizes: FontSizesType;
  fontWeights: FontWeightsType;
  colors: ColorsType;
}

export interface BaseThemeType {
  fontSizes: FontSizesType;
  fontWeights: FontWeightsType;
}