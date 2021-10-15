import { faBook, faHome, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Card, Col, Row } from "react-bootstrap"

/**
 *
 */
const Landing = () => {
  // navigation to 4 directions -> use cases oriented.

  // news component here?

  //

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      <Col>
        <Link to="/portal?mode=visitor" className="text-decoration-none">
          <Card>
            <Card.Body>
              <Card.Title>Visitor</Card.Title>
              <Card.Text>
                This is a longer card with 
              </Card.Text>
              <FontAwesomeIcon icon={faUsers} size="2x"/>
              
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=professional" className="text-decoration-none">
          <Card>
            <Card.Body>
              <Card.Title>CH-Professional</Card.Title>
              <Card.Text>
                This is a longer card with 
              </Card.Text>
              <FontAwesomeIcon icon={faHome} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=policy" className="text-decoration-none">
          <Card>
            <Card.Body>
              <Card.Title>Policy Maker</Card.Title>
              <Card.Text>
                This is a longer card with 
              </Card.Text>
              <FontAwesomeIcon icon={faUserPlus} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=researcher" className="text-decoration-none">
          <Card>
            <Card.Body>
              <Card.Title>Researcher</Card.Title>
              <Card.Text>
                This is a longer card with 
              </Card.Text>
              <FontAwesomeIcon icon={faBook} size="2x"/>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  )
}

export default Landing
