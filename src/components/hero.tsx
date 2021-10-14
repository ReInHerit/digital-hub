import React from "react"
import Image from "./image"
import Typed from "react-typed"
import { Col, Row, Button } from "react-bootstrap"


const roles = ["on the development of a digital cultural heritage ecosystem, offering an open and collaborative space to experiment, share and innovate. ", "EU", "Team Player", "React JS", "Angular"];
const Hero = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <Row>
      <Col lg={6}>
        <br />
        <h1>HORIZON 2020 ReInHerit</h1>
        <h2 className="fw-lighter text-secondary h5">Redefining the future of cultural heritage, through a disruptive model of sustainability</h2>
        <Button variant="primary">Join us!</Button>
        <br />
    <br />
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
        style={{fontSize:"25px"}}
    ></Typed>
      </Col>
      <Col lg={6}>
        <div style={{ width: "100%" }}>
            <Image alt="Virtual Healthcare for you" filename="rein_logo.jpg" style={{maxWidth: "40%"}}/>
            <Image alt="Virtual Healthcare for you" filename="rein_eu.png" style={{maxWidth: "40%"}}/>
          </div>
      </Col>
    </Row>
    
    
    
    
  <br></br>
  <br></br>
  <br></br>
  </>
  )
}
export default Hero
