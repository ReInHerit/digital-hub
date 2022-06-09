import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer: React.FC = () => {
  return (
    <div className="border-1 border-top pt-4 mt-lg-5 shadow">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <ul style={{listStyle: "none"}}>
              <li className="mb-lg-5">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about/dataprot">Data protection</Link>
              </li>
              <li>
                <Link to="/about/imprint">Imprint</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
              <p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545” </p>
              <img style={{maxWidth:"60px"}} src="/images/rein_eu.png"></img>
          </Col>
          <Col>
            <p><Link to="/cms">Login to CMS</Link></p>
            <p>Follow us on: </p>
            <FontAwesomeIcon className="ms-1" icon={faLinkedin}></FontAwesomeIcon> 
            <FontAwesomeIcon className="ms-1" icon={faFacebook}></FontAwesomeIcon> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
