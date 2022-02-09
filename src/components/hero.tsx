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
  "#Aiming at international cooperation and networking for cultural heritage actors"
]
const Hero = () => {
  return (
    <div className="rounded" style={{ minHeight: "75vh" }}>
      <Row className="w-75">
        <Col lg={12}>
          <MainHeading>ReInherit Digital Hub</MainHeading>
          <h2 className="text-lighter h3">
            <span>
              Redefining the future of cultural heritage, through a disruptive
              model of sustainability
            </span>
          </h2>

          <hr></hr>

          <p>
            The ReinHerit Digital Hub functions as a digital ecosystem for
            information and exchange on cultural heritage. In this hub, both
            visitors and professionals can find information on cultural heritage
            management and digitization, and also have the chance to get to know
            the tools and events developed in the course of the ReInherit
            project.
          </p>
          {/* <p>Are you ready to see what the future of cultural heritage may hold?</p> */}
          {/* <p>Then .. </p> */}
          {/* <p className="" style={{color:"rgba(52 ,  166,  194, 1)", fontWeight:600, fontSize:"1.5em"}}>Choose your Path and Make it Your Own! </p> */}
          <Typed
            loop
            typeSpeed={10}
            backSpeed={20}
            strings={roles}
            backDelay={1000}
            loopCount={0}
            showCursor={true}
            className="self-typed"
            cursorChar="|"
            //style={{fontSize:"25px"}}
            style={{
              color: "rgba(52 ,  166,  194, 1)",
              fontWeight: 600,
              fontSize: "1.5em",
            }}
          ></Typed>
          <br />
          <br />
          <FontAwesomeIcon
            size="4x"
            color="lightgrey"
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </Col>
        <Col lg={6}>
          <div style={{ width: "100%" }}>
            {/* <Image alt="Virtual Healthcare for you" filename="rein_logo.jpg" style={{maxWidth: "40%"}}/> */}
            {/* <Image alt="Virtual Healthcare for you" filename="rein_eu.png" style={{maxWidth: "40%"}}/> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Hero
