import { Link } from "gatsby";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

interface Props {
  sticky?: boolean
}

/**
 * Navigation for documentation page of the first performance in the Digital Hub.
 * @returns 
 */
const SecondPerfNavDoc: React.FC<Props> = (props) => {

  return <ListGroup className={props.sticky && "sticky-top"} variant="flush">
<ListGroupItem>
      <Link to="/secondperfdoc/spoverview">Overview</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfdoc/spMuseologicalPerspective">Museological Perspective</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfdoc/spApplication">Application Description and Code</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfdoc/spvideoArt">Video Art Description and Sample</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfdoc/spmusic">Music Score and Description</Link>
    </ListGroupItem>
    </ListGroup>

}


export default SecondPerfNavDoc;





