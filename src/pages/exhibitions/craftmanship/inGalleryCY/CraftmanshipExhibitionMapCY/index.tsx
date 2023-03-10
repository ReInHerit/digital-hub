import React, {useState} from "react"
import { Link } from "gatsby"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import MapQOne from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q1_mapCraftmanshipCY"
import MapQTwo from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q2_mapCraftmanshipCY"
import MapQThree from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q3_mapCraftmanshipCY"
import MapQFour from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q4_mapCraftmanshipCY"

const CraftmanshipAnswersGR: React.FC = () => {

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
<div className="exh_container_inner_green exh_map_container_green mt-5">
  <div className="d-grid gap-2">
  <Badge className="badgeCraftmanship rounded-pill"><h1>Αποτελέσματα</h1></Badge>
  </div>
  <div className="craftmanshipQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
            <Link to="/exhibitions/craftmanship/inGalleryEN/CraftmanshipExhibitionMapEN" style={{ color: "white" }} className="text-decoration-none">English</Link></h2></Badge>
          </div>
          </div>

<Row>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Ερώτηση 1</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Ερώτηση 2</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Ερώτηση 3</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Ερώτηση 4</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Ερώτηση 1</h1> && <MapQOne></MapQOne>}
      {MapQTwoVisible && <h1>Ερώτηση 2</h1> && <MapQTwo></MapQTwo>}
      {MapQThreeVisible && <h1>Ερώτηση 3</h1> && <MapQThree></MapQThree>}
      {MapQFourVisible && <h1>Ερώτηση 4</h1> && <MapQFour></MapQFour>}
  </div>

  <div className="exh_submit_button">
      <div className="exh_arrow_container">
      <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
  </div>
      <Button className="exh_submit_btn" href="/exhibitions/craftmanship/inGalleryCY/4thQuestionCraftmanshipCY">
        <h1 style={{ color: "white" }}>Η ερώτηση 4 έχει ήδη απαντηθεί;</h1>
      </Button>
  </div> 

  </div>
</BaseExhibitionConflictDE>
    )
  }

export default CraftmanshipAnswersGR