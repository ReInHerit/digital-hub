import { ReinheritRESTMode } from "../types/reinherit";
import { useCaseMode } from "./useCaseMode"


export const useReinMode = () => {

  const { modeVal } = useCaseMode();

  let modeBsColorMap = new Map<ReinheritRESTMode, "primary" | "secondary">();
  modeBsColorMap.set("researcher", "primary");
  modeBsColorMap.set("visitor", "secondary");


  const getModeColorClass = () => modeBsColorMap.get(modeVal);

  return {
    modeVal,
    getModeColorClass
  }

}



