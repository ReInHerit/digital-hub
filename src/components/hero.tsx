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
        <h1>HORIZON 2020 ReInHerit</h1>
        <h2><small>Redefining the future of cultural heritage, through a disruptive model of sustainability</small></h2>
        <Button variant="primary">Join us!</Button>
      </Col>
      <Col lg={6}>
        <div style={{ width: "100%" }}>
            <Image alt="Virtual Healthcare for you" filename="rein_logo.jpg" style={{maxWidth: "50%"}}/>
            <Image alt="Virtual Healthcare for you" filename="rein_eu.png" style={{maxWidth: "50%"}}/>
          </div>
      </Col>
    </Row>
    
    
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
        style={{fontSize:"30px", fontWeight:600}}
    ></Typed>
    
    
  <br></br>
  <br></br>
  <br></br>
  </>
  )
}
export default Hero
