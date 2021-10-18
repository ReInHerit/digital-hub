import React, { useContext } from "react";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";


const PortalContent = () => {

  const { theme } = useReinTheme();

  return <h1 className={`bg-${theme.styles.BS_COLOR_CLASS}`}>Portal page</h1>

}


export default PortalContent;