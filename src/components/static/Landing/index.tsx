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
    <Row xs={1} md={2} lg={4} className="g-4">
      <Col>
        <Link to="/portal?mode=visitor">
          <Card>
            <Card.Body>
              <Card.Title>Visitor</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=professional">
          <Card>
            <Card.Body>
              <Card.Title>CH-Professional</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=policy">
          <Card>
            <Card.Body>
              <Card.Title>Policy Maker</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <Link to="/portal?mode=researcher">
          <Card>
            <Card.Body>
              <Card.Title>Researcher</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  )
}

export default Landing
