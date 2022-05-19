import React from "react"
import Image from "./image"
import Typed from "react-typed"
import { Col, Row, Button, Container } from "react-bootstrap"
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
    <div style={{ minHeight: "75vh" }}>
      <div
        style={{
          backgroundImage:
            'url("https://www.reinherit.eu/images/Backgrounds/ReInHerit-Slider-1.jpg")',
          width: "99vw",
          height: "85vh",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <Row>
          <Col md={7}>

          </Col>
          <Col>
            <div style={{marginTop:"35vh"}}></div>
            <h1 className="h1" style={{color:"#5f4136", fontWeight:400, fontSize:"3em", textAlign:"center"}}>ReInHerit Digital Hub</h1>
            <br></br>
            <h2 style={{textAlign:"center", fontWeight:500, color:"#5f4136"}} className="h5">Resources, information, and collaboration in cultural heritage</h2>
          </Col>
          <Col md={1}></Col>
        </Row>
        
      </div>

      {/* <img style={{maxWidth:"99vw", maxHeight:"50vh"}} src="https://www.reinherit.eu/images/Backgrounds/ReInHerit-Slider-1.jpg"></img> */}

      {/* <Row className="w-75">
        <Col lg={12}>
          '<MainHeading className="ps-3" style={{borderLeft:"4px solid rgba(52 ,  166,  194, 1)", fontSize:"3em"}}>ReInHerit Digital Hub</MainHeading>
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
      </Row>' */}

      <Container>
        <p className="p-md-4" style={{textAlign:"center", fontSize:"1.25em"}}>The Digital Hub of the ReInHerit project presents resources for cultural heritage professionals and a networking hub. It also showcases the project exhibitions and gives access to engaging content for anyone passionate about heritage.</p>
      </Container>
    </div>
  )
}
export default Hero
