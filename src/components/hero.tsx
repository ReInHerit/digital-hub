import React from "react"
import { Col, Row, Container, Carousel, Card, Tabs, Tab, Image, Button, CardGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpen, faChevronDown, faLandmark, faPeopleArrows } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import LatestFeedManagement from "./shared/LatestFeed/management"
import LatestFeedTourism from "./shared/LatestFeed/tourism"
import LatestFeedTechnology from "./shared/LatestFeed/technology"
import "../styles/home.css"

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
          'url("/images/bannerVase2.jpg")',
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

      <div className="d-md-none text-center pt-5">
        <br/>
        <h1 className="h1" style={{color:"#7F4734", fontWeight:400, fontSize:"3em", textAlign:"center"}}>ReInHerit Digital Hub</h1>  
        <br></br>
        <img alt="ReInHerit stock image" src="/images/bannerVase2.jpg" width={300}></img>
        <br/>
        <br/>
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
      <div>
      <br />
      <Row xs={1} md={3} xxl={3} className="g-3" style={{minHeight:"50vh", textAlign:"left"}}>
      <Col>
      <Card className="cardHome" style={{minHeight: "45vh", borderColor:"#f463ca", borderWidth: "0.50em"}}>
         <Link to="/resources" className="text-decoration-none text-dark">
            <Card.Body>
              <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faBookOpen} pull="left" /> 
                <b>Resources for professionals</b>
              </Card.Title>
              <hr />
              <Card.Text style={{fontSize:"1.15em"}}>
             <div className="contentHome">
              A series of resources for professionals in cultural heritage and tourism.
              <hr />
              <Card.Img variant="bottom" className="imgBx" src="/images/home_assets/resources.png" />
              </div>
              <div className="sci">
              <ul>
                <li>Webinars on cultural management, cultural tourism, digital transformation, and new technologies.</li>
                <li>Factsheets on cultural heritage management.</li>
                <li>Documentation of the ReInHerit computer vision applications.</li>
                <li>Documentation of the ReInHerit eShop.</li>
              </ul>
              </div>
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      <Col>
      <Card className="cardHome" style={{minHeight: "45vh", borderColor:"#f6f73e", borderWidth: "0.50em"}}>
         <Link to="/networkinghub" className="text-decoration-none text-dark">
            <Card.Body>
            <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faPeopleArrows} pull="left" />
                <b>Networking platform</b>
              </Card.Title>
              <hr />
              <Card.Text style={{fontSize:"1.15em"}}>
              <div className="contentHome">
                Become part of the ReInHerit Community!
              <hr />
              <Card.Img variant="bottom" className="imgBx" src="/images/home_assets/networking.png" />
                </div>
              <div className="sci">
                <ul>
                <li>Join our forum and connect with other professionals.</li>
                <li>Host a travelling exhibition.</li>
                <li>Contribute to our growing digital collection.</li>
                <li>Visit our previous chats archive.</li>  
                </ul>              
              </div>
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      <Col>
      <Card className="cardHome" style={{minHeight: "45vh", borderColor:"#52e33b", borderWidth: "0.50em"}}>
         <Link to="/visitorhub" className="text-decoration-none text-dark">
            <Card.Body>
            <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faLandmark} pull="left" />
                <b>Discover collections & events</b>
                <hr />
              </Card.Title>
              <Card.Text style={{fontSize:"1.15em"}}>
              <div className="contentHome">
                Have fun and discover new cultural heritage objects and applications!
                <Card.Img variant="bottom" className="imgBx" src="/images/home_assets/discover.png" />
                </div>
              <div className="sci">
                <ul>
                  <li>Visit the ReTHINKING digital exhibitions.</li>
                  <li>Visit the ReInHerit digital collection.</li>
                  <li>Visit our eShop with free digital objects inspired by our collections.</li>
                  <li>Discover the ReInHerit applications.</li>
                  <li>Listen to our Museums Up podcast.</li>
                </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Link> 
      </Card>
      </Col>
      </Row>
      </div>
    </Container>
      <br />
      <br />

    <div
      style={{
      backgroundImage:'url("/images/bannerPeople2.jpg")',
      width: "99vw",
      height: "45vh",
      backgroundRepeat:"no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
<Container className="mt-3 mb-3 p3 text-center">
 <Row xs={1} md={2} style={{minHeight:"40vh", textAlign:"center"}}>
  <Col sm>
     <Card className="ms-5 me-3 g-5" style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReThinking EXHIBITIONS</Card.Title>
        <Card.Text>
          Visit our three digital exhibitions - a collaboration between the Graz Museum, the Museum of Cycladic Art, and the Bank of Cyprus Cultural Foundation.
        </Card.Text>
        <Button variant="success" href="/exhibitions/">Visit the digital exhibitions</Button>
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
</Container>
</div>

<div className="d-md-none text-center pt-5">
        <br/>
        <br></br>
        <img alt="ReInHerit stock image" src="/images/bannerPeople2.jpg" width={400}></img>
        <br/>
        <br/>
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
 backgroundImage:'url("/images/bannerObjects2.jpg")',
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
