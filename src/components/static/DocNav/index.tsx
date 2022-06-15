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
      <Link to="/doc/authorization">Access levels / roles</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/faq">FAQ</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/doc/manuals">Manuals</Link>
    </ListGroupItem>
  </ListGroup>

}


export default DocNav;


