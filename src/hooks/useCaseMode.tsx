
import React from "react";
import { useLocation } from '@reach/router';

type ReinheritRESTMode = "researcher" | "visitor" | "bla"


/**
 * Hook that reads out given mode parameter and returns allowed values. Defaults to "visitor".
 * @returns current value of the mode parameter.
 */
export const useCaseMode = () => {

  const loc = useLocation();
  const [modeVal, setModeVal] = React.useState<ReinheritRESTMode>("visitor");

  const handleLoc = () => {
  
    let url = new URL(loc.href);
    let modeVal = url.searchParams.get("mode");

    switch(modeVal){
      case "researcher":
        return modeVal;
      case "visitor":
        return modeVal;
      default:
        return "visitor";
    }
  }

  // gatsby wouldn't run useffect 
  React.useEffect(() => {
    setModeVal(handleLoc());
  }, []);


  return {
    modeVal
  }

}