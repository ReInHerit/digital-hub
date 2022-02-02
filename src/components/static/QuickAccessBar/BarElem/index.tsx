import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

interface Props {
  toolTipheader: JSX.Element | string;
  toolTipbody: JSX.Element | string;
  faIcon: IconDefinition;
  href: string;
}

const BarElem: React.FC<Props> = (props) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{props.toolTipheader}</Popover.Header>
      <Popover.Body>
        {props.toolTipbody}
      </Popover.Body>
    </Popover>
  );

  return <div className="text-align-center">
  <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
    <a style={{color:"lightgrey"}} href={props.href} target="_blank">
      <FontAwesomeIcon icon={props.faIcon}></FontAwesomeIcon>
    </a>
  </OverlayTrigger>
  </div>
}

export default BarElem;