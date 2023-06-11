import React from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const travellingExhib = () => {
  return (
    <BaseLayout
    pageTitle="Travelling Exhibitions | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="ReThinking Exhibitions, in Greece, Cyprus, and Austria"
        breadCrumb={[
          {label:"Discover", value:"/visitorhub"},
          {label:"Travelling Exhibitions", value:"/travellingexhibitions"}
        ]}        
      >Discover the ReThinking Exhibitions</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <Row>
            <Col>
            <Card>
      <Card.Body>
        <Card.Text>
        The ReInHerit ReThinking exhibitions focus on the themes of "Conflicts", "Craftsmanship" and "Identities", and are currently being shown at the Graz Museum (Austria), the Museum of Cycladic Art (Athens, Greece), and the Bank of Cyprus Cultural Foundation (Nicosia, Cyprus).
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ backgroundColor: "blue"}}>
      <Card.Body>
      <Card.Title style={{color: "white"}}>ReThinking Conflicts</Card.Title>
        <Card.Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ySTcIsiZkao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
            <Card style={{ backgroundColor: "green"}}>
      <Card.Body>
      <Card.Title style={{color: "white"}}>ReThinking Craftmanship</Card.Title>
        <Card.Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9eD4mFFTlFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ backgroundColor: "red"}}>
      <Card.Body>
      <Card.Title style={{color: "white"}}>ReThinking Identities</Card.Title>
        <Card.Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V2L3WekKg4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <Row className="mt-5">
            <p style={{textAlign: "center"}}><h5>In parallel, there are digital exhibitions and an online collections reflecting on the same themes.</h5></p>
        </Row>
        <Row>
            <Col>
            <Card>
      <Card.Body>
      <Card.Title>Digital Exhibitions</Card.Title>
        <Card.Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ak5qWM7oPCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Text>
      </Card.Body>
      <Card.Footer>            
        <Button variant="secondary" href="/exhibitions">Click here to visit the online exhibitions</Button>
      </Card.Footer>
    </Card>
            </Col>
            <Col>
            <Card>
      <Card.Body>
      <Card.Title>Online Collection</Card.Title>
        <Card.Text>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rXfH8FlG-9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Text>
      </Card.Body>
      <Card.Footer>            
      <Button variant="secondary" href="https://collection.reinherit-hub.eu/">Click here to visit the online collection</Button>
      </Card.Footer>
    </Card>
    </Col>
        </Row>
        </Container>
    </BaseLayout>
  )
}

export default travellingExhib
