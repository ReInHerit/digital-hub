import { reinheritStatics } from "../data/reinheritStatics";
import { ReinheritTheme, reinheritThemes } from "../data/reinheritThemes";
import { ReinheritRESTMode, REINHERIT_AUDIENCE, REINHERIT_PERSONS } from "../types/reinherit";
import { useModeParam } from "./useModeParam"
import React from "react";

/**
 * Returns correct reinherit theme object according to specified mode REST-param.
 * By default / unknown mode -> returns visitor theme.
 * @returns 
 */
export const useReinModeTheme = () => {

  const { modeVal, setMode } = useModeParam("VISITOR");

  const [theme, setTheme] = React.useState(reinheritThemes.VISITOR);
  const [groupKey, setGroupKey] = React.useState<keyof REINHERIT_AUDIENCE>("VISITOR");

  /**
   * Returns the Reinherit theme according to given REST mode parameter.
   * @returns the related reinherit theme.
   */
  const getTheme = (groupKey: keyof REINHERIT_AUDIENCE) => {
    let relTheme = reinheritThemes[groupKey];
    return relTheme
  }

  /**
   * Takes in a string. Return related Reinherit audience key.
   * @param restModeValue 
   * @returns key of related reinherit audience. default to visitor.
   */
  const validateToGroupKey = (restModeValue: string): keyof REINHERIT_AUDIENCE => {

    let reinPersonKey: null | keyof REINHERIT_AUDIENCE = null;
    Object.keys(REINHERIT_PERSONS).some((key) => {
      if(restModeValue === reinheritStatics[key].REST_MODE_VAL){
        reinPersonKey = key as keyof REINHERIT_AUDIENCE;
        return true;
      }
    });

    if(!reinPersonKey){
      console.warn(`No theme found for mode: ${modeVal}. Defaulting to visitor theme.`)
      return "VISITOR";
    }

    return reinPersonKey; 
  }

  React.useEffect(() => {
    if(!modeVal)return;
    const grouKeyLoc = validateToGroupKey(modeVal);
    setTheme(getTheme(grouKeyLoc));
    setGroupKey(grouKeyLoc);
  }, [modeVal]);

  return {
    modeVal,
    groupKey,
    theme,
    setMode
  }

}



