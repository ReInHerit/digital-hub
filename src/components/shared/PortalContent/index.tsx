import React, { useContext } from "react";
import { useTheme } from "../../../hooks/contexts/useTheme";


const PortalContent = () => {

  const { theme } = useTheme();

  return <h1 className={`bg-${theme.styles.BS_COLOR_CLASS}`}>Portal page</h1>

}


export default PortalContent;