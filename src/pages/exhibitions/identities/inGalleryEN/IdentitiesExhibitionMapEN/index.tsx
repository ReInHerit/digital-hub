import React, {useState} from "react"
import { Link } from "gatsby"
import { Container, Badge, Button, Row, Col, Modal } from "react-bootstrap"
import BaseExhibitionConflictDE from "../../../../../components/static/BaseExhibitionConflicts/inGalleryIndex"
import MapQOne from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/Q1_mapIdentitiesEN"
import MapQTwo from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/Q2_mapIdentitiesEN"
import MapQThree from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/Q3_mapIdentitiesEN"
import MapQFour from "../../../../../components/shared/ExhibitionQuestions/inGalleryIdentities/Q4_mapIdentitiesEN"

const IdentitiesAnswersEN: React.FC = () => {

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
<div className="exh_container_inner_red exh_map_container_red mt-5" style={{maxWidth: "75%", margin: "12.5%"}}>
  <div className="d-grid gap-2">
  <a id="QuestionMapIdentitiesEN"></a>
  <Badge className="badgeIdentities rounded-pill"><h1>Results</h1></Badge>
  </div>
  <div className="identitiesQuestions exh_question_intro_text">
          <div className="d-flex justify-content-end">
            <Badge pill bg="danger"><h2>
            <Link to="/exhibitions/identities/inGalleryDE/IdentitiesExhibitionMapDE/#QuestionMapIdentitiesDE" style={{ color: "white" }} className="text-decoration-none">Deutsch</Link></h2></Badge>
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
        Have you already answered question 4?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
          <Button 
          href="/exhibitions/identities/inGalleryEN/4thQuestionIdentitiesEN/#Question4IdentitiesEN"
          variant="primary">
          Go to question 4!
          </Button>
        </Modal.Footer>
      </Modal>
  </div>

<Row>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 1" ? "active" : ""}`} onClick={handleMapQOne}>Question 1</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 2" ? "active" : ""}`} onClick={handleMapQTwo}>Question 2</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 3" ? "active" : ""}`} onClick={handleMapQThree}>Question 3</Button></Col>
<Col lg={3} md={6} sm={12}><Button className={`exh_map_btn ${activeButton === "Question 4" ? "active" : ""}`} onClick={handleMapQFour}>Question 4</Button></Col>
</Row>

  <div className="exh_btn_content">
      {MapQOneVisible && <h1>Question 1</h1> && <MapQOne></MapQOne>}
      {MapQTwoVisible && <h1>Question 2</h1> && <MapQTwo></MapQTwo>}
      {MapQThreeVisible && <h1>Question 3</h1> && <MapQThree></MapQThree>}
      {MapQFourVisible && <h1>Question 4</h1> && <MapQFour></MapQFour>}
  </div>

  <div className="exh_submit_button">
      <div className="exh_arrow_container">
      <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
  </div>
      <Button className="exh_submit_btn" href="/exhibitions/identities/inGalleryEN/4thQuestionIdentitiesEN/#Question4IdentitiesEN">
        <h1 style={{ color: "white" }}>Have you already answered question 4?</h1>
      </Button>
  </div> 

  </div>
</BaseExhibitionConflictDE>
    )
  }

export default IdentitiesAnswersEN