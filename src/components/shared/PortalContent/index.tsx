import { Link } from "gatsby";
import React, { useContext } from "react";
import { Breadcrumb } from "react-bootstrap";
import { reinheritStatics } from "../../../data/reinheritStatics";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";


const PortalContent = () => {

  const { theme } = useReinTheme();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item><Link to={`/?mode=${theme.mode}`}>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{ reinheritStatics[theme.groupKey].LABEL} Portal</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className={`text-${theme.styles.BS_COLOR_CLASS}`}>{reinheritStatics[theme.groupKey].LABEL}</h1>

    </>)

}


export default PortalContent;