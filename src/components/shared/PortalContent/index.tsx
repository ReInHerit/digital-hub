import React, { useContext } from "react";
import { reinheritStatics } from "../../../data/reinheritStatics";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";


const PortalContent = () => {

  const { theme } = useReinTheme();

  return <h1 className={`text-${theme.styles.BS_COLOR_CLASS}`}>Portal page - {reinheritStatics[theme.groupKey].LABEL}</h1>

}


export default PortalContent;