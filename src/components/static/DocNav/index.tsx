import { Link } from "gatsby";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

interface Props {
  sticky?: boolean
}

/**
 * Navigation for documentation page of the Digital Hub.
 * @returns 
 */
const DocNav: React.FC<Props> = (props) => {

  return <ListGroup className={props.sticky && "sticky-top"} variant="flush">
    <ListGroupItem>
      <Link to="/doc">About</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/reqs">Requirement analysis (use cases)</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/architecture">Software architecture</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/datamodel">Datamodel</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/workflows">Workflows</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/authorization">Authorization</Link>
    </ListGroupItem>
  </ListGroup>

}


export default DocNav;


