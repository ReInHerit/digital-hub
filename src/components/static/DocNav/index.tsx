import { Link } from "gatsby";
import React from "react";


/**
 * Navigation for documentation page of the Digital Hub.
 * @returns 
 */
const DocNav = () => {

  return <ul>
    <li>
      <Link to="/doc">About</Link>
    </li>
    <li>
      <Link to="/doc/architecture">Architecture</Link>
    </li>
    <li>
      <Link to="/doc/datamodel">Datamodel</Link>
    </li>
    <li>
      <Link to="/doc/reqs">Requirements</Link>
    </li>
    <li>
      <Link to="/doc/workflows">Workflows</Link>
    </li>
  </ul>

}


export default DocNav;


