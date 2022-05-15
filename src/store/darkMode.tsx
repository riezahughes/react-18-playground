import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { IGlobalTheme, IGlobalThemeContext } from "./types";

//create a context, with createContext api
export const GlobalThemeContext = createContext<IGlobalThemeContext>([
  true,
  () => true,
]);

const GlobalThemeProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  // this state will be shared with all components
  const [isDark, setIsDark] = useState<IGlobalTheme>(false);

  return (
    // this is the provider providing state
    <GlobalThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

const isDarkMode = () => useContext(GlobalThemeContext);

export { GlobalThemeProvider, isDarkMode };
