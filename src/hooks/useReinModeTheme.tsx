import { reinheritStatics } from "../data/reinheritStatics";
import { ReinheritTheme, reinheritThemes } from "../data/reinheritThemes";
import { ReinheritRESTMode, REINHERIT_PERSONS } from "../types/reinherit";
import { useModeParam } from "./useModeParam"
import React from "react";

/**
 * Returns correct reinherit theme object according to specified mode REST-param.
 * By default / unknown mode -> returns visitor theme.
 * @returns 
 */
export const useReinModeTheme = () => {

  const { modeVal, setMode } = useModeParam();

  const [theme, setTheme] = React.useState(reinheritThemes.VISITOR);

  const getTheme = () => {
    let reinPersonTheme: null | ReinheritTheme = null;
    Object.keys(REINHERIT_PERSONS).forEach((key) => {
      if(modeVal === reinheritStatics[key].REST_MODE_VAL){
        reinPersonTheme = reinheritThemes[key];
      }
    });

    if(!reinPersonTheme){
      console.warn(`No theme found for mode: ${modeVal}. Defaulting to visitor theme.`)
      return reinheritThemes.VISITOR;
    }

    return reinPersonTheme; 
  }

  React.useEffect(() => {
    if(!modeVal)return;
    setTheme(getTheme());
  }, [modeVal]);

  return {
    modeVal,
    theme,
    setMode
  }

}



