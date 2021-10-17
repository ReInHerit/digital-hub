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
    console.log(userGroup);
      switch(userGroup){
        case "VISITOR":
          return faUsers
        case "CH_PROFESSIONAL":
          return faHome;
        case "RESEARCHER":
          return faBook;
        case "POLICY_MAKER":
          return faUserPlus;
        default:
            return faUsers;
      }
  }


  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Object.entries(reinheritStatics).map(([key, group]) => <Col>
        <Link to={`/portal?mode=${group.REST_MODE_VAL}`} className="text-decoration-none text-dark">
          <Card>
            <Card.Body>
              <Card.Title>{group.LABEL}</Card.Title>
              <Card.Text>
                This is a longer card with 
              </Card.Text>
              <FontAwesomeIcon icon={assignFa(key as keyof REINHERIT_AUDIENCE)} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>)}
    </Row>
  )
}

export default Landing
