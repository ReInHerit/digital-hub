import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../components/static/BaseExhibitionConflicts"
import MapQOne from "../../../../components/shared/ExhibitionQuestions/mapsConflict/Q1_map"

const ConflictsAnswers: React.FC = () => {

return (
<BaseExhibitionConflict>
  <Container fluid className="mt-5 p-5" style={{borderColor: "blue"}}>
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  
  <Row>
  <Col>
  <Button className="rounded-pill bg-primary" href="static\index.html">Question 1</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary">Question 2</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary">Question 3</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary">Question 4</Button>
  </Col>
</Row>

  <div className="d-grid mt-5">
    <MapQOne></MapQOne>
  </div>

  </Container>
</BaseExhibitionConflict>
    )
  }

export default ConflictsAnswers