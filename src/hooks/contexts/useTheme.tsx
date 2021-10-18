
import React from "react";
import { reinheritStatics } from "../../data/reinheritStatics";
import { reinheritThemes } from "../../data/reinheritThemes";
import { ReinheritRESTMode } from "../../types/reinherit";
import { useReinMode } from "../useReinMode";

const ReinheritThemeContext = React.createContext({mode: reinheritStatics.VISITOR.REST_MODE_VAL, styles: reinheritThemes.VISITOR, changeTheme: (val: string) => undefined});

/**
 * Hook handling reading of mode REST-Param and mapping it to the related 
 * theme in Reinherit.
 * @returns context specific provider hook and context itself. Additionally variables to enable usage of the hook.
 */
export const useTheme = () => {

  // retrieves mode + active-theme
  const rein = useReinMode();

  /**
   * Handles changing of reinherit modes dependent on REST parameter.
   * @param themeMode 
   */
  const handleThemeChange = (themeMode: string) => {
    rein.setMode(themeMode)
  }

  const contextObj = {
    changeTheme: handleThemeChange,
    mode: rein.modeVal as ReinheritRESTMode,
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