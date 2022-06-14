import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"
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
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about/dataprot">Data protection</Link>
              </li>
              <li>
                <Link to="/about/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="https://www.reinherit.eu/" target="_blank">Project page</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
              <p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545” </p>
              <Link className="text-decoration-none" to="https://ec.europa.eu/info/index_en" target="_blank"><img style={{maxWidth:"200px"}} src="/images/rein_eu.png"></img></Link>
          </Col>
          <Col>
            <p><Link to="/cms">Login to CMS</Link></p>
            <p>Follow us on: </p>
            <Link className="text-decoration-none" to="https://www.facebook.com/ReInHerit/" target="_blank"><FontAwesomeIcon className="ms-1" icon={faFacebook}></FontAwesomeIcon></Link>
            <Link className="text-decoration-none" to="https://linkedin.com/company/reinherit-h2020/" target="_blank"><FontAwesomeIcon className="ms-1" icon={faLinkedin}></FontAwesomeIcon> </Link>
            <Link className="text-decoration-none" to="https://www.tiktok.com/@reinherit_" target="_blank"><FontAwesomeIcon className="ms-1" icon={faTiktok}></FontAwesomeIcon> </Link>
            <Link className="text-decoration-none" to="https://mobile.twitter.com/reinherit_" target="_blank"><FontAwesomeIcon className="ms-1" icon={faTwitter}></FontAwesomeIcon> </Link>
            <Link className="text-decoration-none" to="https://www.instagram.com/reinherit_/" target="_blank"><FontAwesomeIcon className="ms-1" icon={faInstagram}></FontAwesomeIcon> </Link>

            
            
          </Col>
        </Row>
        <br/>
        <br/>
      </Container>
    </div>
  )
}

export default Footer
