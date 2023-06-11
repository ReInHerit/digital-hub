import React, {useState, useEffect} from "react"
import { Container, Badge, Button, Row, Col, Modal } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import MapQOneDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q1_mapDE"
import MapQTwoDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q2_mapDE"
import MapQThreeDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q3_mapDE"
import MapQFourDE from "../../../../../components/shared/ExhibitionQuestions/inGalleryConflicts/Q4_mapDE"

const ConflictsAnswersDE: React.FC = () => {

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
<div className="exh_container_inner exh_map_container mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>
  <div className="d-grid gap-2">
  <a id="QuestionMapConflDE"></a>
  <Badge className="badgeConflicts rounded-pill"><h1>Vergleiche deine Antwort mit der Welt</h1></Badge>
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
        Haben Sie schon Frage 4 beantwortet??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Schließen
          </Button>
          <Button 
          href="/exhibitions/conflicts/inGalleryDE/4thQuestionConflictDE/#Question4ConflDE"
          variant="primary">
          Los zum Frage 4!
          </Button>
        </Modal.Footer>
      </Modal>
  </div>

<Row>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Frage 1</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Frage 2</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Frage 3</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Frage 4</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Frage 1</h1> && <MapQOneDE></MapQOneDE>}
      {MapQTwoVisible && <h1>Frage 2</h1> && <MapQTwoDE></MapQTwoDE>}
      {MapQThreeVisible && <h1>Frage 3</h1> && <MapQThreeDE></MapQThreeDE>}
      {MapQFourVisible && <h1>Frage 4</h1> && <MapQFourDE></MapQFourDE>}
  </div>

  <div className="exh_submit_button">
      <div className="exh_arrow_container">
      <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
  </div>
      <Button className="exh_submit_btn" href="/exhibitions/conflicts/inGalleryDE/4thQuestionConflictDE/#Question4ConflDE">
        <h1 style={{ color: "white" }}>Frage 4 schon beantwortet?</h1>
      </Button>
  </div> 

  </div>
</BaseExhibitionConflictDE>
    )
  }

export default ConflictsAnswersDE