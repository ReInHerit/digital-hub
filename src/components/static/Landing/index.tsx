import {
  faBook,
  faHome,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
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
    switch (userGroup) {
      case "VISITOR":
        return faUsers
      case "PROFESSIONAL":
        return faHome
      default:
        return faUsers
    }
  }

  return (
    <div>
      <Row xs={1} md={2} className="g-6">
        <Col>
          <Link to={`/portal?mode=`} className="text-decoration-none text-dark">
            <Card style={{ borderRadius: "0" }} className="shadow reincard">
              <Card.Body>
                <Card.Title>Visitor</Card.Title>
                <Card.Text>
                  Are you interested in cultural heritage or are you even a so
                  to say museum regular? Have you ever wondered how cultural
                  heritage sites and museums can benefit from the digital
                  paradigm and what interesting features can come out of this
                  seemingly unusual partnership? Are you ready to see this
                  partnership in action and try out some Tools and Features?
                  <p className="mt-2">Then this path might be the one for you!</p>
                </Card.Text>
                <Button variant="outline-secondary">Join Visitors Portal <FontAwesomeIcon icon={faUsers} /></Button>
                {/* <FontAwesomeIcon icon={faUsers} size="2x" /> */}
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to={`/portal?mode=`} className="text-decoration-none text-dark">
            <Card style={{ borderRadius: "0" }} className="shadow reincard">
              <Card.Body>
                <Card.Title>Professional</Card.Title>
                <Card.Text>
                  Are you working or researching in the field of cultural
                  heritage? Are you eager to learn about new ways and
                  technologies for cultural heritage management and display and
                  how to implement them? Do you want to simply get in contact
                  with other peers to discuss cultural heritage themed issues?
                  <p className="mt-2">Then this path might be the one for you!</p>
                </Card.Text>
                <Button variant="outline-secondary">Join Visitors Portal <FontAwesomeIcon icon={faUsers} /></Button>
                {/* <FontAwesomeIcon icon={faUsers} size="2x" /> */}
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* {Object.entries(reinheritStatics).map(([key, group], i) => <Col key={key + "_" + i}>
        <Link to={`/portal?mode=${group.REST_MODE_VAL}`} className="text-decoration-none text-dark">
          <Card style={{borderRadius:"0"}} className="shadow reincard">
            <Card.Body>
              <Card.Title>{group.LABEL}</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies, orci in tempor blandit, augue purus fermentum ligula, ullamcorper facilisis lectus magna sit amet mi.
              </Card.Text>
              <FontAwesomeIcon icon={assignFa(key as keyof REINHERIT_AUDIENCE)} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>)} */}
      </Row>
    </div>
  )
}

export default Landing
