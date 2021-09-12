import { FC, useState, createContext } from "react";

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

export const ThemeContext = createContext({
  theme: {},
  toggleDarkMode: () => {},
});

const lightTheme: CustomTheme = {
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

const darkTheme: CustomTheme = {
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

export const MyThemeProvider: FC = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const themeContext = {
    theme: isDarkMode ? darkTheme : lightTheme,
    toggleDarkMode: toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};
