import { Link } from "gatsby";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";


/**
 * Navigation for documentation page of the Digital Hub.
 * @returns 
 */
const DocNav = () => {

  return <ListGroup variant="flush">
    <ListGroupItem>
      <Link to="/doc">About</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/architecture">Architecture</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/datamodel">Datamodel</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/reqs">Requirements</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/workflows">Workflows</Link>
    </ListGroupItem>
  </ListGroup>

}


export default DocNav;


