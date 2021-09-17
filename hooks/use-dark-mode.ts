import useLocalStorage from "./use-local-storage";

interface UseDarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function useDarkMode(initialValue?: boolean): UseDarkMode {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "isDarkMode",
    !!initialValue
  );
  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  return { isDarkMode, toggleDarkMode };
}

export default useDarkMode;
