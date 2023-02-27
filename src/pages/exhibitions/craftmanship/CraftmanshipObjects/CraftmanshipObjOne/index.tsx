import React, { useRef } from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const CraftmanshipObjectOne = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 className="conflicts">
  The Frame decorated with silkworm cocoons was made in the 20th century and features cocoon embroidery on velvet fabric and a black and white photograph. It measures 57 x 60 cm. It is part of the collection of the Bank of Cyprus Cultural Foundation in Nicosia, Cyprus.
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
          <a href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjTwo">
          <img alt="Second Object" src="images/craftmanship/small-white-lekythos.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
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