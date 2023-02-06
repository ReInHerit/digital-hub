import React, {useState} from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../components/static/BaseExhibitionConflicts"
import MapQOne from "../../../../components/shared/ExhibitionQuestions/mapsConflict/Q1_map"
import MapQTwo from "../../../../components/shared/ExhibitionQuestions/mapsConflict/Q2_map"
import MapQThree from "../../../../components/shared/ExhibitionQuestions/mapsConflict/Q3_map"
import MapQFour from "../../../../components/shared/ExhibitionQuestions/mapsConflict/Q4_map"


const ConflictsAnswers: React.FC = () => {

  const [MapQOneVisible, setMapQOneVisible] = useState(false);
  const [MapQTwoVisible, setMapQTwoVisible] = useState(false);
  const [MapQThreeVisible, setMapQThreeVisible] = useState(false);
  const [MapQFourVisible, setMapQFourVisible] = useState(false);

  const handleMapQOne = () => {
    setMapQOneVisible((isVisible) => !isVisible);
    setMapQTwoVisible(false);
    setMapQThreeVisible(false);
    setMapQFourVisible(false);
  };

  const handleMapQTwo = () => {
    setMapQTwoVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQThreeVisible(false);
    setMapQFourVisible(false);
  };

  const handleMapQThree = () => {
    setMapQThreeVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQTwoVisible(false);
    setMapQFourVisible(false);
  };

  const handleMapQFour = () => {
    setMapQFourVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQTwoVisible(false);
    setMapQThreeVisible(false);
  };

return (
<BaseExhibitionConflict>
  <Container fluid className="mt-5 p-5" style={{borderColor: "blue"}}>
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  
  <Row>
  <Col>
  <Button className="rounded-pill bg-primary" onClick={handleMapQOne}> Question 1</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary" onClick={handleMapQTwo}>Question 2</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary" onClick={handleMapQThree}>Question 3</Button>
  </Col>
  <Col>
  <Button className="rounded-pill bg-primary" onClick={handleMapQFour}>Question 4</Button>
  </Col>
</Row>

  <div className="d-grid mt-5">
      {MapQOneVisible && <h1>Question 1</h1> && <MapQOne></MapQOne>}
      {MapQTwoVisible && <h1>Question 2</h1> && <MapQTwo></MapQTwo>}
      {MapQThreeVisible && <h1>Question 3</h1> && <MapQThree></MapQThree>}
      {MapQFourVisible && <h1>Question 4</h1> && <MapQFour></MapQFour>}
  </div>

  </Container>
</BaseExhibitionConflict>
    )
  }

export default ConflictsAnswers