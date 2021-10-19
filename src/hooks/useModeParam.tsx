
import React from "react";
import { useLocation } from '@reach/router';
import { ReinheritRESTMode } from "../types/reinherit";
import { navigate } from "gatsby";


/**
 * Hook that reads out given mode parameter and returns it.
 * @returns current value of the mode parameter.
 */
export const useModeParam = () => {

  const loc = useLocation();
  const [modeVal, setModeVal] = React.useState("");

  const handleLoc = () => {
    let url = new URL(loc.href);
    let modeVal = url.searchParams.get("mode");
    return modeVal;
  }

  const setMode = (value: string) => {
    // using gatsby to update modeval
    navigate(`${window.location.origin}${window.location.pathname}?mode=${value}`)
  }


  // gatsby wouldn't run useffect 
  React.useEffect(() => {
    setModeVal(handleLoc());
  }, [loc]);


  return {
    setMode,
    modeVal
  }

}