import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer: React.FC = () => {
  return (
    <div className="border-1 border-top pt-4 mt-lg-5 shadow bg-white">
      <Container fluid>
        <Row>
          <Col lg={4}>
            <ul style={{listStyle: "none"}}>
              {/* <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about/dataprot">Data protection</Link>
              </li>
              <li>
                <Link to="/about/imprint">Imprint</Link>
  </li> */}
              <li>
                <Link to="/cms" aria-label="Link to cms">CMS access</Link>
                </li>
              <li>
                <a href="https://www.reinherit.eu/" target="_blank">Project website</a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
              <p>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545.</p>
              <a className="text-decoration-none" href="https://ec.europa.eu/info/index_en" target="_blank"><img style={{maxWidth:"200px"}} src="/images/rein_eu.png" alt="EU commission logo" aria-label="EU commission logo"></img></a>
          </Col>
          <Col>
            <p>Follow us on: </p>
            <a className="text-decoration-none" href="https://www.facebook.com/ReInHerit/" target="_blank" aria-label="ReInHerit on Facebook"><FontAwesomeIcon className="ms-1" icon={faFacebook}></FontAwesomeIcon></a>
            <a className="text-decoration-none" href="https://linkedin.com/company/reinherit-h2020/" target="_blank" aria-label="ReInHerit on LinkedIn"><FontAwesomeIcon className="ms-1" icon={faLinkedin}></FontAwesomeIcon> </a>
            <a className="text-decoration-none" href="https://www.tiktok.com/@reinherit_" target="_blank" aria-label="ReInHerit on TikTok"><FontAwesomeIcon className="ms-1" icon={faTiktok}></FontAwesomeIcon> </a>
            <a className="text-decoration-none" href="https://mobile.twitter.com/reinherit_" target="_blank" aria-label="ReInHerit on Twitter"><FontAwesomeIcon className="ms-1" icon={faTwitter}></FontAwesomeIcon> </a>
            <a className="text-decoration-none" href="https://www.instagram.com/reinherit_/" target="_blank" aria-label="ReInHerit on Instagram"><FontAwesomeIcon className="ms-1" icon={faInstagram}></FontAwesomeIcon> </a>

            <br></br>
            <br></br>
            <p className="m-0">Contact:</p>
            <a href="mailto:digitalhub.reinherit@gmail.com">digitalhub.reinherit@gmail.com</a>
            
          </Col>
        </Row>
        <br/>
        <br/>
      </Container>
    </div>
  )
}

export default Footer
