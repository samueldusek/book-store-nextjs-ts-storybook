import React, { FC } from "react";

import { createTheming } from "react-jss";

const ThemeContext = React.createContext({});

export const theming = createTheming(ThemeContext);

const { ThemeProvider } = theming;

export const { useTheme } = theming;

export type CustomTheme = {
  text: {
    color: {
      primary: string;
      secondary: string;
      info: string;
    };
  };
};

const lightTheme: CustomTheme = {
  text: {
    color: {
      primary: "#000000",
      secondary: "#808080",
      info: "#A9A9A9",
    },
  },
};

export const MyThemeProvider: FC = (props) => {
  return <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>;
};
