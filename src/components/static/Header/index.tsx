import {
  faBookOpen,
  faCog,
  faCommentDots,
  faSearch,
  faTools,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Container, Row } from "react-bootstrap"
import React from "react"
import { Link } from "gatsby"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Header: React.FC = () => {
  return (
    <div className="pt-3 mt-4 bg-white text-center">
      <div className="pb-3">
        <Container className="pt-3">
          <img alt="Reinherit header image" src="images/Slogan-cut.webp" style={{marginTop:"3vh"}} height={80}></img>
          <h2 style={{ marginTop: "2vh", color:"grey"}} className="h3">
            ReInHerit Digital Hub
          </h2>
        </Container>
      </div>
    </div>
  )
}

export default Header
