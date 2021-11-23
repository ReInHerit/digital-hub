import React from "react"
import Image from "./image"
import Typed from "react-typed"
import { Col, Row, Button } from "react-bootstrap"


const roles = ["Digital cultural heritage", "Scientific exchange", "Collaboration", "Teamwork"];
const Hero = () => {
  return (
    <div className="text-white rounded" style={{background:" lightblue url('/images/ReinHerit-1.jpg') no-repeat fixed center", minHeight:"75vh"}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    <Row className="p-md-3 w-75" style={{background:"rgba(0, 0, 0, 0.8)", borderLeft:"5px solid black"}}>
      <Col lg={12}>
        <h1><span style={{color:"rgba(52 ,  166,  194, 1)"}}>Digital Hub</span> - HORIZON 2020 ReInHerit</h1>
        <h2 className="text-lighter h3">Redefining the future of cultural heritage, through a disruptive model of sustainability</h2>
    <br />
    <span className="me-md-3">We stand for: </span>
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
            {/* <Image alt="Virtual Healthcare for you" filename="rein_logo.jpg" style={{maxWidth: "40%"}}/> */}
            {/* <Image alt="Virtual Healthcare for you" filename="rein_eu.png" style={{maxWidth: "40%"}}/> */}
          </div>
      </Col>
    </Row>
    
  </div>
  )
}
export default Hero
