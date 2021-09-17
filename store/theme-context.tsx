import { FC, createContext, useContext } from "react";
import useDarkMode from "../hooks/use-dark-mode";
import { CustomTheme } from "../helpers/theme";
import lightTheme from "../styles/themes/light-theme";
import darkTheme from "../styles/themes/dark-theme";

type ThemeContextType = {
  theme: CustomTheme;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

export const MyThemeProvider: FC = (props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(false);

  const themeContext = {
    theme: isDarkMode ? darkTheme : lightTheme,
    toggleDarkMode: toggleDarkMode,
    isDarkMode: isDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};
