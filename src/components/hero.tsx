import React from "react"
import { Col, Row, Container, Carousel, Card, Tabs, Tab, Image, Button, CardGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpen, faChevronDown, faLandmark, faPeopleArrows } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import LatestFeedManagement from "./shared/LatestFeed/management"
import LatestFeedTourism from "./shared/LatestFeed/tourism"
import LatestFeedTechnology from "./shared/LatestFeed/technology"
import "../styles/home.css"
import "../styles/hero2.css"

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
        <br />
        <br />
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" href="#professionalhero" style={{padding:"1em", fontSize:"1.5em"}}>I am working with cultural heritage</Button>
      <Button variant="success" size="lg" href="#visitorhero" style={{padding:"1em", fontSize:"1.5em"}}>I am passionate about cultural heritage</Button>
      </div>
      </Container>
      <br />
      <br />

<div style={{backgroundColor:"#c5c7c6"}}>
<Container className="mt-3 mb-3 p3 text-center">
 <Row xs={1} md={4} style={{minHeight:"40vh", textAlign:"center"}}>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReThinking EXHIBITIONS</Card.Title>
        <Card.Text>
          Visit our three digital exhibitions: ReThinking Conflicts, ReThinking Identities, ReThinking Craftmanship.
        </Card.Text>
        <Button variant="success" href="/exhibitions/">Visit the digital exhibitions</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReInHerit Webinars</Card.Title>
        <Card.Text>
          The webinars cover a range of topic in cultural heritage management and digital practices.
        </Card.Text>
        <Button variant="warning" href="/webinars">Check the past webinars</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReInHerit e-Shop</Card.Title>
        <Card.Text>
          Visit the ReInHerit e-Shop to discover postcards, games, and more, and get inspired by cultural heritage!
        </Card.Text>
        <Button variant="danger" href="/eshop">Discover our free products!</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Featured</Card.Header>
      <Card.Body>
        <Card.Title>ReInHerit Forum</Card.Title>
        <Card.Text>
          Join the ReInHerit Forum and chat with other heritage professionals and
          participate in the #ReInHeritChats!
        </Card.Text>
        <Button variant="primary" href="/forum">Join the conversation!</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
<p></p>
<br />
</div>
  

<div id="visitorhero">
<Container className="mt-5 mb-5 p3 text-center">
<h2 className="mt-3 mb-3">Passionate about heritage?</h2>
<Row>
<p style={{textAlign: "left", fontSize:"1.35em", fontWeight:400}}>
The ReInHerit project experimented with new technologies and new collaborations to develop an offer for anyone interested in cultural heritage. Here you can find:
</p>
<p></p>
<p></p>
  <Col>
  <div className="d-grid gap-2">
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/exhibitions/">The ReThinking Digital Exhibitions</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/applications/">Toolkit applications</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="https://collection.reinherit-hub.eu/">The ReInHerit online collection</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/game/">A videogame</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/podcasts/">The Museums Up Podcast</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/travellingexhibitions/">Info on the Travelling Exhibitions</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/eshop/">The e-Shop</Button>
      <Button variant="success" style={{padding:"0.5em", fontSize:"1em"}} href="/events/">Info on our events</Button>
  </div>
  </Col>

<Col>
<Carousel variant="dark" style={{textAlign: "center"}}>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/eshop-visitors.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/events-visitors.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/DigExhib.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/game-visitors.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/onlineColl.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/podcast.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/toolkit-visitors.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/visitors/travExhib.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
</Carousel>
</Col>
</Row>
</Container>
</div>

<div
      style={{
      backgroundImage:'url("/images/bannerObjects2.jpg")',
      width: "99vw",
      height: "45vh",
      backgroundRepeat:"no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}></div>

<div id="professionalhero">
<Container className="mt-5 mb-5 p3 text-center">
<h2 className="mt-3 mb-3">For heritage professionals</h2>
<Row>
<p style={{textAlign: "left", fontSize:"1.35em", fontWeight:400}}>
The ReInHerit project developed learning resources and provides detailed documentation and code for its applications. Explore the resources here:
</p>
<p></p>
<p></p>
<Col>
<Carousel variant="dark" style={{textAlign: "center"}}>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/12webinars.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/13onlineColl.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/14Performances.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/15Exhibitions.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/16eshop.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/17toolkit.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/18BestPractices.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/19Factsheets.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/20game.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="imgCarousel" src="/images/heroCarousels/professionals/21components.png" alt="" style={{textAlign: "center"}}/>
  </Carousel.Item>
</Carousel>
</Col>

<Col>
<h5>Training material:</h5>
  <div className="d-grid gap-2">

    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/webinars/">Webinars</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/factsheets/">Research Factsheets</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="">(coming soon) Best Practices</Button>
    
  </div>
    <Row className="mt-4"><h5>Documentation:</h5></Row>
  <div className="d-grid gap-2">  
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/tools/apps/">Toolkit Apps Documentation</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/exhibdoc/">Exhibitions Documentation</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/firstperfdoc/overview/">Performances Documentation</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/eshopdoc/">e-Shop Documentation</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="">(coming soon) Videogame</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/exhibdoc/doconlinecoll/">Online Collection Documentation</Button>
    <Button variant="primary" style={{padding:"0.5em", fontSize:"1em"}} href="/tools/components/">Toolkit components</Button>
  </div>

</Col>
</Row>
</Container>
</div>

<div style={{backgroundColor:"#f5e9e9"}}>
<Container className="mt-5 p3 text-center">
<Row>
<p style={{textAlign: "center", fontSize:"1.25em", fontWeight:500, marginTop:"6vh", marginBottom: "3vh"}}>
Join the ReInHerit Forum to network with professionals and share your experiences navigating the Digital hub and using its tools!
</p>
<Button variant="danger" size="lg" href="/forum/">Join the Forum!</Button>
</Row>

<Row xs={1} md={2} style={{minHeight:"40vh", textAlign:"center"}}>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Call for Action</Card.Header>
      <Card.Body>
        <Card.Title>Host an exhibition</Card.Title>
        <Card.Text>
          Discover how to host one of our travelling "ReTHINKING" exhibitions.
        </Card.Text>
        <Button variant="danger" href="/museumcalls/travelling/">Learn more</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col>
     <Card style={{marginTop:"8vh", maxWidth:"75vh"}}>
      <Card.Header as="h4">Call for Action</Card.Header>
      <Card.Body>
        <Card.Title>Contribute to the Online Collection</Card.Title>
        <Card.Text>
          Discover how to share your objects in the ReInHerit Digital Collection.
        </Card.Text>
        <Button variant="danger" href="/museumcalls/digital/">Learn more</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
</div>


<div
style={{
 backgroundImage:'url("/images/bannerPeople2.jpg")',
 width: "99vw",
 height: "45vh",
 backgroundRepeat:"no-repeat",
 backgroundPosition: "center",
 backgroundSize: "cover"
 }}>
</div>


<div style={{backgroundColor:"#c5c7c6"}}>
<Container className="p-md-4 ps-md-5 pe-md-5 text-center">
      <div>
        <h3>Quick links to core areas</h3>
      <br />
      <Row xs={1} md={3} xxl={3} className="g-3" style={{minHeight:"50vh", textAlign:"left"}}>
      <Col>
      <Card className="cardHome" style={{minHeight: "45vh", borderColor:"#f463ca", borderWidth: "0.50em"}}>
         <Link to="/resources" className="text-decoration-none text-dark">
            <Card.Body>
              <Card.Title style={{fontSize:"1.5em", fontWeight:350}}>
              <FontAwesomeIcon icon={faBookOpen} pull="left" /> 
                <b>Resources and training material</b>
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
                <li>Documentation of the ReInHerit Toolkit applications.</li>
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
                  <li>Discover the ReInHerit Toolkit apps.</li>
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
</div>

{/*
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
*/}


</div>
  )
}
export default Hero
