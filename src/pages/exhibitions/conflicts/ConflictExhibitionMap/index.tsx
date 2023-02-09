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
  const [activeButton, setActiveButton] = useState<string | undefined>(undefined);

  const handleMapQOne = () => {
    setMapQOneVisible((isVisible) => !isVisible);
    setMapQTwoVisible(false);
    setMapQThreeVisible(false);
    setMapQFourVisible(false);
    setActiveButton("Question 1");
  };

  const handleMapQTwo = () => {
    setMapQTwoVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQThreeVisible(false);
    setMapQFourVisible(false);
    setActiveButton("Question 2");
  };

  const handleMapQThree = () => {
    setMapQThreeVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQTwoVisible(false);
    setMapQFourVisible(false);
    setActiveButton("Question 3");
  };

  const handleMapQFour = () => {
    setMapQFourVisible((isVisible) => !isVisible);
    setMapQOneVisible(false);
    setMapQTwoVisible(false);
    setMapQThreeVisible(false);
    setActiveButton("Question 4");
  };


return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_map_container mt-5">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>Results</h1></Badge>
  </div>

<Row>
 <Col><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Question 1</Button></Col>
 <Col><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Question 2</Button></Col>
 <Col><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Question 3</Button></Col>
 <Col><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Question 4</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Question 1</h1> && <MapQOne></MapQOne>}
      {MapQTwoVisible && <h1>Question 2</h1> && <MapQTwo></MapQTwo>}
      {MapQThreeVisible && <h1>Question 3</h1> && <MapQThree></MapQThree>}
      {MapQFourVisible && <h1>Question 4</h1> && <MapQFour></MapQFour>}
  </div>

  </div>
</BaseExhibitionConflict>
    )
  }

export default ConflictsAnswers