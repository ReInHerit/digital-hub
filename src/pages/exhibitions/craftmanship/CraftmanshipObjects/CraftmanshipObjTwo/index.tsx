import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"

const CraftmanshipObjectOne = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 className="conflicts">
  The White Lekythos is a clay vessel meant to store aromatic oils. It was made around 420 b.C. in a workshop in Attica and measures 28.8 cm in height. It is part of the collection of the Museum of Cycladic Art in Athens, Greece.
  </h4>

  <Badge className="badgeConflicts rounded-pill exh_m_btm"><h1> ...</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="" width="1000" height="800"></iframe>
</div>

<div className="exh_h5p_2dviewer">
</div>

<div className="exh_object_btm">
<div className="exh_bullet_btn">Get to know other objects</div>
    <Row>
      <Col md={6} xs={12}>  
          <a href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjOne">
          <img alt="First Object" src="images/craftmanship/small-coccoon-frame.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
          </img></a>
      </Col>
      <Col md={6} xs={12}>
      <a href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjThree">
          <img alt="Third Object" src="images/craftmanship/small-guild-chest.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
          </img></a>
      </Col>
    </Row>
</div>


<div className="exh_submit_button">
          <div className="exh_arrow_container">
              <img className="exh_blue_arrow" src="/images/exhibition_assets/arrow_blue.svg" alt=""></img>
          </div>
          <Button className="exh_submit_btn" href="exhibitions/craftmanship/CraftmanshipQuestions/4thQuestionCraftmanship">
            <h1 style={{color: "white"}}>Exit Exhibition</h1>
          </Button>
  </div>
</div>

  </div>
</BaseExhibitionConflict>
    )
  }

export default CraftmanshipObjectOne;