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
      <Link to="/doc">Technologies</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/datamodel">Information Architecture</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/authorization">Access roles</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/howto">Manual for Hub Contributors</Link>
    </ListGroupItem>
  </ListGroup>

}


export default DocNav;


