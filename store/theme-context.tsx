import { FC, useState, createContext, useContext } from "react";

export type CustomTheme = {
  text: {
    color: {
      primary: string;
      secondary: string;
      info: string;
    };
  };
  background: {
    color: {
      primary: string;
      secondary: string;
    };
  };
  shadow: {
    color: {
      primary: string;
      secondary: string;
    };
  };
};

type ThemeContextType = {
  theme: CustomTheme;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export const lightTheme: CustomTheme = {
  text: {
    color: {
      primary: "#000000",
      secondary: "#808080",
      info: "#A9A9A9",
    },
  },
  background: {
    color: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
    },
  },
  shadow: {
    color: {
      primary: "#D5D5D5",
      secondary: "#FFFFFF",
    },
  },
};

export const darkTheme: CustomTheme = {
  text: {
    color: {
      primary: "#F5F7FA",
      secondary: "#E4E7EB",
      info: "#CBD2D9",
    },
  },
  background: {
    color: {
      primary: "#323F4B",
      secondary: "#7B8794",
    },
  },
  shadow: {
    color: {
      primary: "#1F2933",
      secondary: "#3E4C59",
    },
  },
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

export const MyThemeProvider: FC = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

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
