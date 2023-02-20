import React from "react"
import { Col, Row, Container, Carousel, Card, Tabs, Tab, Image, Button, CardGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpen, faChevronDown, faLandmark, faPeopleArrows } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import LatestFeedManagement from "./shared/LatestFeed/management"
import LatestFeedTourism from "./shared/LatestFeed/tourism"
import LatestFeedTechnology from "./shared/LatestFeed/technology"

const Hero = () => {

  const textContainerStyle: React.CSSProperties = {
    fontSize:"1.125em"
  };

  return (
    <div style={{ minHeight: "75vh" }} id="reinheritHero">
    <div
      className="d-none d-md-block"
      style={{
        backgroundImage:
          'url("/images/bannerVase.jpg")',
        width: "99vw",
        height: "65vh",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <Row>
        <Col md={7}>
        </Col>
        <Col>
          <div style={{marginTop:"25vh"}}></div>
          <h1 className="h1" style={{color:"#7F4734", fontWeight:450, fontSize:"3em", textAlign:"center"}}>ReInHerit Digital Hub</h1>
          <br></br>
          <h2 style={{textAlign:"center", fontWeight:400, color:"#5f4136"}}>Resources, information, and collaboration in cultural heritage and tourism</h2>
        </Col>
        <Col md={1}></Col>
      </Row>  
    </div>
      

      <Container className="p-md-4 ps-md-5 pe-md-5 text-center">
        <p className="ms-5 me-5 ps-sm-5 pe-sm-5" style={{fontSize:"1.35em", fontWeight:400}}>The Digital Hub of the ReInHerit project hosts the project exhibitions and gives access to engaging content for anyone passionate about heritage. Heritage professionals will find resources and training material to foster and support cultural tourism in museums and heritage sites, and a networking platform to connect and exchange experiences.</p>
        <br></br>
        <h3>Choose your path and #MakeItYourOwn!</h3>
        <br></br>        
      </Container>
      
      <br />
      
      <br />
      <Container className="p-md-4 ps-md-5 pe-md-5 text-center">
      <Row xs={1} md={3} xxl={3} className="g-3" style={{minHeight:"50vh", textAlign:"center"}}>
      <Col>
      <Card style={{minHeight: "35vh", borderColor:"#f463ca", borderWidth: "0.50em"}}>
         <Link to="/resources" className="text-decoration-none text-dark">
            <Card.Body>
              <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faBookOpen} pull="left" /> 
                Resources for professionals
              </Card.Title>
              <hr />
              <Card.Text style={{fontSize:"1.15em"}}>
              Here you can find webinars, a toolkit, and documentation. There are step-by-step guides to the development and implementation of innovative digital tools - and best practices in cultural heritage management and engagement.
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      <Col>
      <Card style={{minHeight: "35vh", borderColor:"#f6f73e", borderWidth: "0.50em"}}>
         <Link to="/networkinghub" className="text-decoration-none text-dark">
            <Card.Body>
            <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faPeopleArrows} pull="left" />
                Networking platform
              </Card.Title>
              <hr />
              <Card.Text style={{fontSize:"1.15em"}}>
              Here you can find a forum organised around key themes in cultural heritage management, collecting best practices and lessons learnt in developing collaborations across tourism, heritage sites, museums, policy makers, and the public.
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      <Col>
      <Card style={{minHeight: "35vh", borderColor:"#52e33b", borderWidth: "0.50em"}}>
         <Link to="/visitorhub" className="text-decoration-none text-dark">
            <Card.Body>
            <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faLandmark} pull="left" />
                Discover collections & events
              </Card.Title>
              <hr />
              <Card.Text style={{fontSize:"1.15em"}}>
              Here you can find the project digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways.
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      </Row>
      </Container>

      <div
style={{
 backgroundImage:'url("/images/bannerPeople.jpg")',
 width: "99vw",
 height: "45vh",
 backgroundRepeat:"no-repeat",
 backgroundPosition: "center",
 backgroundSize: "cover"
 }}>
 <Row xs={1} md={2} style={{minHeight:"40vh", textAlign:"center"}}>
  <Col sm>
     <Card className="ms-5 me-3 g-5" style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReThinking CONFLICTS</Card.Title>
        <Card.Text>
          The first ReInHerit exhibition opened at the Graz Museum in February 2023 - and, in parallel, the corresponding digital exhibition was launched.
        </Card.Text>
        <Button variant="success" href="/exhibitions/conflicts/ConflictQuestions/1stQuestionConflict/">Visit the digital exhibition</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col sm>
     <Card className="ms-3 me-5 g-5" style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReInHerit Webinars</Card.Title>
        <Card.Text>
          The webinars cover a range of topic in cultural heritage management and digital practices. A new webinar is published every two weeks.
        </Card.Text>
        <Button variant="warning" href="/webinars">Check the past webinars</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</div>

<Container className="mt-3 mb-3 p3 text-center">
  <Row>
  <Container className="mt-3 p-1" style={textContainerStyle}>
    <h3 className="mb-3 mt-3" style={{textAlign:"center"}}>Latest by topic</h3>
          <Tabs
            defaultActiveKey="Technology"
            className="mb-3 mt-5"
            fill
            variant="pills"
            style={{fontSize:"1.20em"}}
          >
            <Tab eventKey="Technology" title="Technology">
              <LatestFeedTechnology></LatestFeedTechnology>
            </Tab>
            <Tab eventKey="Management" title="Management">
              <LatestFeedManagement></LatestFeedManagement>         
            </Tab>
            <Tab eventKey="Tourism" title="Tourism">
              <LatestFeedTourism></LatestFeedTourism>
            </Tab>
          </Tabs>
          </Container>
  </Row>   
</Container>

<div
style={{
 backgroundImage:'url("/images/bannerObjects.jpg")',
 width: "99vw",
 height: "45vh",
 backgroundRepeat:"no-repeat",
 backgroundPosition: "center",
 backgroundSize: "cover"
 }}>
</div>

</div>
  )
}
export default Hero
