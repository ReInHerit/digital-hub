import React from "react"
import Image from "./image"
import Typed from "react-typed"
import { Col, Row, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import MainHeading from "./static/MainHeading"

const roles = [
  "#Choose your path",
  "#Make it your own",
  "#Redefine #makeityourown",
  "#Teamwork",
  "#Aiming at international cooperation and networking for cultural heritage actors",
]
const Hero = () => {
  return (
    <div className="rounded" style={{ minHeight: "75vh" }}>
      <Row className="w-75">
        <Col lg={12}>
          <MainHeading className="ps-3" style={{borderLeft:"4px solid rgba(52 ,  166,  194, 1)", fontSize:"3em"}}>ReInHerit Digital Hub</MainHeading>
          <h2 className="h4">
            <span>
              Redefining the future of cultural heritage, through a disruptive
              model of sustainability
            </span>
          </h2>
          <hr></hr>
          <p>
            The ReInHerit Digital Hub functions as a digital ecosystem for
            information and exchange on cultural heritage. In this hub, both
            visitors and professionals can find information on cultural heritage
            management and digitization, and also have the chance to get to know
            the tools and events developed in the course of the ReInherit
            project.
          </p>
          <br />
          <br />
          <FontAwesomeIcon
            size="4x"
            color="lightgrey"
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </Col>
      </Row>
    </div>
  )
}
export default Hero
