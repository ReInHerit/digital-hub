
import React from "react";
import { reinheritStatics } from "../../data/reinheritStatics";
import { ReinheritTheme, reinheritThemes } from "../../data/reinheritThemes";
import { ReinheritRESTMode, REINHERIT_AUDIENCE } from "../../types/reinherit";
import { useReinModeTheme } from "../useReinModeTheme";

interface ReinheritThemeContextData {
  changeTheme: (val: string) => void;
  mode: string;
  groupKey: keyof REINHERIT_AUDIENCE;
  styles: ReinheritTheme;
}

const ReinheritThemeContext = React.createContext<undefined | ReinheritThemeContextData>(undefined);

/**
 * Hook handling reading of mode REST-Param and mapping it to the related 
 * theme in Reinherit.
 * @returns context specific provider hook and context itself. Additionally variables to enable usage of the hook.
 */
export const useReinTheme = () => {

  // retrieves mode + active-theme
  const rein = useReinModeTheme();

  /**
   * Handles changing of reinherit modes dependent on REST parameter.
   * @param themeMode 
   */
  const handleThemeChange = (themeMode: string) => {
    rein.setMode(themeMode)
  }

  const contextObj = {
    changeTheme: handleThemeChange,
    mode: rein.modeVal,
    groupKey: rein.groupKey,
    styles: rein.theme
  }

 

  // provider component
  const ReinheritThemeProvider: React.FC = ({ children }) => <ReinheritThemeContext.Provider value={contextObj}>{children}</ReinheritThemeContext.Provider>

  // value provided by themeprovider
  const theme = React.useContext(ReinheritThemeContext); 

  return {
    theme,
    ReinheritThemeProvider,
    ReinheritThemeContext
  }
}