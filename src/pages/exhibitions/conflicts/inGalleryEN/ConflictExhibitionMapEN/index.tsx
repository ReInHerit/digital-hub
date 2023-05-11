import React, {useState} from "react"
import { Link } from "gatsby"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import MapQOneEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q1_mapEN"
import MapQTwoEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q2_mapEN"
import MapQThreeEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q3_mapEN"
import MapQFourEN from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q4_mapEN"


const ConflictsAnswersEN: React.FC = () => {

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
<BaseExhibitionConflictDE>
<div className="exh_container_inner exh_map_container mt-5">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>Results</h1></Badge>
  <div className="d-flex justify-content-end">
            <Badge pill bg="primary"><h2>
            <Link to="/exhibitions/conflicts/inGalleryGR/ConflictExhibitionMapGR" style={{ color: "white" }} className="text-decoration-none">Ελληνικά </Link></h2></Badge>
          </div>
  </div>

<Row>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Question 1</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Question 2</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Question 3</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Question 4</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Question 1</h1> && <MapQOneEN></MapQOneEN>}
      {MapQTwoVisible && <h1>Question 2</h1> && <MapQTwoEN></MapQTwoEN>}
      {MapQThreeVisible && <h1>Question 3</h1> && <MapQThreeEN></MapQThreeEN>}
      {MapQFourVisible && <h1>Question 4</h1> && <MapQFourEN></MapQFourEN>}
  </div>

  <div className="exh_submit_button">
      <div className="exh_arrow_container">
      <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
  </div>
      <Button className="exh_submit_btn" href="/exhibitions/conflicts/inGalleryEN/4thQuestionConflictEN">
        <h1 style={{ color: "white" }}>Have you already answered question 4?</h1>
      </Button>
  </div> 

  </div>
</BaseExhibitionConflictDE>
    )
  }

export default ConflictsAnswersEN