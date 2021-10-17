import React, { useContext } from "react";
import { ThemeContext } from "../../static/BaseLayout";


const PortalContent = () => {

  const theme = useContext(ThemeContext);

  return <h1 className={`bg-${theme.BS_COLOR_CLASS}`}>Portal page</h1>

}


export default PortalContent;