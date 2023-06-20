import React, {useState} from "react"
import { Link } from "gatsby"
import { Container, Badge, Button, Row, Col, Modal } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import MapQOne from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q1_mapCraftmanshipEN"
import MapQTwo from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q2_mapCraftmanshipEN"
import MapQThree from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q3_mapCraftmanshipEN"
import MapQFour from "../../../../../components/shared/ExhibitionQuestions/inGalleryCraftmanship/Q4_mapCraftmanshipEN"

const CraftmanshipAnswersEN: React.FC = () => {

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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  React.useEffect(() => {
    setTimeout(() => {
        setShow(true)
    }, 120000)
}, [setShow])

return (
<BaseExhibitionConflictDE>
<div className="exh_container_inner_green exh_map_container_green mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>
  <div className="d-grid gap-2">
  <a id="QuestionMapCraftmEN"></a>
  <Badge className="badgeCraftmanship rounded-pill"><h1>Results</h1></Badge>
  </div>
  <div className="craftmanshipQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="success"><h2>
            <Link to="/exhibitions/craftmanship/inGalleryDE/CraftmanshipExhibitionMapDE/#QuestionMapCraftmDE" style={{ color: "white" }} className="text-decoration-none">German</Link></h2></Badge>
          </div>
          </div>

          <div>
  <Modal 
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       show={show} 
       onHide={handleClose}>
       
        <Modal.Header closeButton>
        <Modal.Title>Restart?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Have you already answered question 3?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
          <Button 
          href="/exhibitions/craftmanship/inGalleryENGraz/4thQuestionCraftmanshipENGraz"
          variant="primary">
          Go to question 3!
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
<Row>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Question 1</Button></Col>
{/* <Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Question 2</Button></Col> */}
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Question 2</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Question 3</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Question 1</h1> && <MapQOne></MapQOne>}
    {/*  {MapQTwoVisible && <h1>Question 2</h1> && <MapQTwo></MapQTwo>} */}
      {MapQThreeVisible && <h1>Question 2</h1> && <MapQThree></MapQThree>}
      {MapQFourVisible && <h1>Question 3</h1> && <MapQFour></MapQFour>}
  </div>

  <div className="exh_submit_button">
      <div className="exh_arrow_container">
      <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
  </div>
      <Button className="exh_submit_btn" href="/exhibitions/craftmanship/inGalleryENGraz/4thQuestionCraftmanshipENGraz">
        <h1 style={{ color: "white" }}>Have you already answered question 3?</h1>
      </Button>
  </div> 

  </div>
</BaseExhibitionConflictDE>
    )
  }

export default CraftmanshipAnswersEN