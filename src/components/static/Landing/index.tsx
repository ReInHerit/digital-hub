import { faBook, faHome, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { reinheritStatics } from "../../../data/reinheritStatics"
import { REINHERIT_AUDIENCE, REINHERIT_PERSONS } from "../../../types/reinherit"

/**
 *
 */
const Landing = () => {
  // navigation to 4 directions -> use cases oriented.

  // news component here?

  //

  const assignFa = (userGroup: keyof REINHERIT_AUDIENCE) => {
      switch(userGroup){
        case "VISITOR":
          return faUsers
        case "PROFESSIONAL":
          return faHome;
        default:
            return faUsers;
      }
  }


  return (
    <div>
    <Row xs={1} md={2} className="g-6">
      {Object.entries(reinheritStatics).map(([key, group], i) => <Col key={key + "_" + i}>
        <Link to={`/portal?mode=${group.REST_MODE_VAL}`} className="text-decoration-none text-dark">
          <Card style={{borderRadius:"0"}} className="shadow">
            <Card.Body>
              <Card.Title>{group.LABEL}</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, orci in tempor blandit, augue purus fermentum ligula, ullamcorper facilisis lectus magna sit amet mi.
              </Card.Text>
              <FontAwesomeIcon icon={assignFa(key as keyof REINHERIT_AUDIENCE)} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>)}
    </Row>
    </div>
  )
}

export default Landing
