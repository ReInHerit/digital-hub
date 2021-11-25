import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import { useReinLocalStorage } from "../../../../hooks/useReinLocalStorage";

interface Props {
  uid?: string,
  url: string,
  title: string,
  type: string,
  excerpt: string,
  targetAudience: string[]
  faIcon: any;
  footerContent?: JSX.Element;
  children?: any
}

/**
 * To be used in combination with ReinCardGrid.
 * @param props 
 * @returns 
 */
const ReinGridCard: React.FC<Props> = (props) => {

  const ReinStorage = useReinLocalStorage();

  return <Col key={props.uid && props.uid}>
    
      <Card className="shadow rounded border-light" style={{fontSize: ".95em"}}>
      <Link to={props.url} className="text-decoration-none text-dark">
        <Card.Body>
          <Card.Title style={{fontSize:"1.2em"}}><FontAwesomeIcon icon={props.faIcon} size="1x"/> {props.title}</Card.Title>
          <Card.Text>
            {props.excerpt}
          </Card.Text>
          <br></br>
          {/* <FontAwesomeIcon icon={assignFa(key as keyof REINHERIT_AUDIENCE)} size="2x"/> */}
          {props.children}
        </Card.Body>
        </Link>
        <Card.Footer className="bg-light border-0">
            <small className="text-muted d-inline">{props.targetAudience.map(aud => `${aud} `)}
            {props.uid && <Form.Check
              type="checkbox"
              label="(save to personal collection)"
              defaultChecked={ReinStorage.retrieveItem(props.uid) ? true : false}
              onClick={() => ReinStorage.toggleItem({value: false, id:props.uid, title: props.title, type:props.type as any})}
            />}
            {props.footerContent && props.footerContent}
            </small>
          </Card.Footer>
      </Card>
    
  </Col>
}


export default ReinGridCard;