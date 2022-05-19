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
          height: "75vh",
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
            <h1 className="h1" style={{color:"#7F4734", fontWeight:400, fontSize:"3em", textAlign:"center"}}>ReInHerit Digital Hub</h1>
            <br></br>
            <h2 style={{textAlign:"center", fontWeight:500, color:"#5f4136"}} className="h4">Resources, information, and collaboration in cultural heritage</h2>
          </Col>
          <Col md={1}></Col>
        </Row>
        
      </div>

      

      <Container className="p-md-4 ps-md-5 pe-md-5 text-center">
        <p className="ms-5 me-5 ps-5 pe-5" style={{fontSize:"1.35em", fontWeight:400}}>The Digital Hub of the ReInHerit project presents resources for cultural heritage professionals and a networking hub. It also showcases the project exhibitions and gives access to engaging content for anyone passionate about heritage.</p>
        <div><img style={{width:100}} src="https://www.reinherit.eu/templates/g5_helium/custom/images/ReInHerit%20logo%20Final-Redefining.jpg"></img></div>
        
        <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"3em", color:"lightgrey"}}></FontAwesomeIcon>
        
      </Container>
      
      <br />
      
      <br />
      
      <Row style={{backgroundColor:"#dceff3", minHeight:"50vh", textAlign:"center"}}>
          <Col md={8} className="reinCard">
            <Container className="mt-md-5 h-100">
              <h4 className="h5">Discover the ReInHerit resources!</h4>
              <p>Here you can find webinars, a toolkit, and documentation. There are step-by-step guides to the development and implementation of innovative digital tools - and best practices in cultural heritage management and engagement.</p>
            </Container>
          </Col>
          <Col md={4}>
            <div
              style={{
                backgroundImage:"url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                width:"100%",
                height:"100%",
                backgroundRepeat:"no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            ></div>
          </Col>
      </Row>

      <Row style={{backgroundColor:"#faf107", minHeight:"50vh", textAlign:"center"}}>
          <Col md={4}>
          <div
              style={{
                backgroundImage:"url('https://images.unsplash.com/photo-1566443280617-35db331c54fb?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774')",
                width:"100%",
                height:"100%",
                backgroundRepeat:"no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            ></div>
          </Col>
          <Col md={8}>
          <Container className="mt-md-5">
              <h4 className="h5">Share your experience and connect!</h4>
              <p>Here you can find a forum organised around key themes in cultural heritage management, collecting best practices and lessons learnt in developing collaborations across tourism, heritage sites, museums, policy makers, and the public.</p>
            </Container>
          </Col>
      </Row>


      <Row style={{backgroundColor:"#b6ca76", minHeight:"50vh", textAlign:"center"}}>
          <Col md={8}>
          <Container className="mt-md-5">
              <h4 className="h5">Enjoy cultural heritage online!</h4>
              <p>Here you can find the project digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways.</p>
            </Container>
          </Col>
          <Col md={4}>
            <div
                style={{
                  backgroundImage:"url('https://www.reinherit.eu//images//Consortium/Graz%20Museum/Archivalien_c_LenaPrehal_011.jpg')",
                  width:"100%",
                  height:"100%",
                  backgroundRepeat:"no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              ></div>
          </Col>
      </Row>
      

    </div>
  )
}
export default Hero
