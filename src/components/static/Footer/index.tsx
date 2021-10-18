import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer: React.FC = () => {
  return (
    <div className="border-1 border-top pt-2">
      <Container>
        <Row>
          <Col lg={6}>
            <ul style={{listStyle: "none"}}>
              <li>
                <Link to="/dataprot">Data protection</Link>
              </li>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
