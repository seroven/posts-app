import { createContext } from "react";
import { ThemeType } from "../types/themeTypes";
import { lightTheme } from "../theme/theme";

export const AppContext = createContext<ThemeType>(lightTheme);
