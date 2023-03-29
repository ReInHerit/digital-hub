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
const PerfNav: React.FC<Props> = (props) => {

  return <ListGroup className={props.sticky && "sticky-top"} variant="flush">
    <ListGroupItem>
      <Link to="/firstperfdoc/overview">Overview</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/musicscore">Music Score</Link>
    </ListGroupItem>
    {/*
    <ListGroupItem>
      <Link to="/firstperfdoc/sensory">Sensory Exhibition</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/...">Pre-Show Engagement</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/images">Images</Link>
    </ListGroupItem>
    */}
    <ListGroupItem>
      <Link to="/tools/apps/7cbc7084-6711-4ac0-88c6-4e05cc34ae50">Application</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/videoArt">Video Art</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/treasureHunt">Treasure Hunt</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/firstperfdoc/creditsPerfOne">Credits</Link>
    </ListGroupItem>
  </ListGroup>

}


export default PerfNav;


