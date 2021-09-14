import {
  MyThemeProvider,
  useTheme,
  lightTheme,
  darkTheme,
} from "../store/theme-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: lightTheme.background.color.primary },
      { name: "dark", value: darkTheme.background.color.primary },
    ],
  },
};

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

import DarkModeToggle from "react-dark-mode-toggle";

const ToggleDarkMode = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  return (
    <DarkModeToggle
      onChange={toggleDarkMode}
      checked={isDarkMode}
      size={60}
      speed={1.6}
    />
  );
};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <ToggleDarkMode />
      <div style={{ marginTop: "20px" }}>
        <Story />
      </div>
    </MyThemeProvider>
  ),
];
