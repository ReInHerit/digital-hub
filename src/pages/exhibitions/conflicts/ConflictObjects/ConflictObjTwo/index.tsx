import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"

const ConflictObjectOne = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 className="conflicts">The pyxis is a clay vessel with lid traditionally used for placing women's jewelry and cosmetics. Dated at 760-750 BC, this pyxis measures 26,5 cm in height and 32,5 cm in depth and is part of the collection at the Museum of Cycladic Art in Athens, Greece.
  </h4>

<Badge className="badgeConflicts rounded-pill"><h1>The Story of the Pyxis</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-pyxis.html" width="1000" height="1400"></iframe>
</div>

<Badge className="badgeConflicts rounded-pill"><h1>Viewer</h1></Badge>

<div> 
<div className="sketchfab-embed-wrapper mt-5"> 
<iframe title="Pyxis With Lid" 
src="https://sketchfab.com/models/f1fd94248210431cb1d2cc01558c7575/embed"
width="640" height="480" > 
</iframe> 
</div>
</div>

<div className="exh_object_btm">
<div className="exh_bullet_btn">Get to know other objects</div>
    <Row>
      <Col md={6} xs={12}> 
        <a href="exhibitions/conflicts/ConflictObjects/ConflictObjOne">
        <img alt="First Object" src="images/conflicts/small-CherryRageGM.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
        </img></a>
      </Col>
      <Col md={6} xs={12}>
        <a href="exhibitions/conflicts/ConflictObjects/ConflictObjThree">
        <img alt="Third Object" src="images/conflicts/small-CiproMapBoCCF.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
        </img></a>
      </Col>
    </Row>
</div>


<div className="exh_submit_button">
          <div className="exh_arrow_container">
              <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
          </div>
          <Button className="exh_submit_btn" href="exhibitions/conflicts/ConflictQuestions/4thQuestionConflict">
            <h1 style={{color: "white"}}>Exit Exhibition</h1>
          </Button>
  </div>
</div>

  </div>
</BaseExhibitionConflict>
    )
  }

export default ConflictObjectOne;