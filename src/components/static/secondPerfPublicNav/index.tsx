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
const SecondPerfNavPublic: React.FC<Props> = (props) => {

  return <ListGroup className={props.sticky && "sticky-top"} variant="flush">
    <ListGroupItem>
      <Link to="/secondperfpublic/0Introduction">Introduction</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/1TurkishBrazier">Turkish Brazier</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/2VaseKannourka">Vase "Kannourka"</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/3WeavingDoulappi">Weaving Doulappi</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/4WoodenChest">Wooden Chest</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/5AmboustaCase">"Ambousta" Case</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/6CarvedChair">Carved Chair</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/7CopperBox">Copper Box</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/8CopperTalisman">Copper Talisman</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/9GildedBuckle">Gilded Buckle</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/10Hanapi">Hanapi</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/11ClayVase">Clay Vase</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/12ThroneChair">Throne Chair</Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/secondperfpublic/13questionnaires">Survey</Link>
    </ListGroupItem>
  </ListGroup>

}


export default SecondPerfNavPublic;


