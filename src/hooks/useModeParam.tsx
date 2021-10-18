
import React from "react";
import { useLocation } from '@reach/router';
import { ReinheritRESTMode } from "../types/reinherit";


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
    window.location.search = `?mode=${value}`;
  }


  // gatsby wouldn't run useffect 
  React.useEffect(() => {
    setModeVal(handleLoc());
  }, []);


  return {
    setMode,
    modeVal
  }

}