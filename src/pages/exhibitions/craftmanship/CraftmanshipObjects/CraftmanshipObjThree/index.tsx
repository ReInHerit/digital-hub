import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionCraftmanship from "../../../../../components/static/BaseExhibitionCraftmanship"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const CraftmanshipObjectOne = () => {

return (
<BaseExhibitionCraftmanship>
<div className="exh_container_inner_green exh_rm_nav exh_container_border_green">
  <div className="d-grid gap-2">
  <Badge className="badgeCraftmanship rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
  </div>
  <div className="craftmanship">
  <h4 className="craftmanship">

  The Trade Guild Chest of the Graz Gingerbread Bakers was made in 1744 as the emblem of the craft guild and to hold the guild’s most important documents. It measures 41 × 60 x 31 cm. It is part of the collection of the Graz Museum in Graz, Austria.  
  </h4>

  <Badge className="badgeCraftmanship rounded-pill exh_m_btm"><h1> ...</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-guildchest.html" width="1000" height="800"></iframe>
</div>

<div className="exh_sketchfab_iframe"> 
<div className="sketchfab-embed-wrapper mt-5"> 
<iframe title="Graz Museum - Chest" 
src="https://sketchfab.com/models/2847fbc84084432a953bad32afbac682/embed"
width="100%" height="100%" > 
</iframe> 
</div>
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
      <a href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjTwo">
          <img alt="Second Object" src="images/craftmanship/small-white-lekythos.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
          </img></a>
      </Col>
    </Row>
</div>


<div className="exh_submit_button">
          <div className="exh_arrow_container">
              <img className="exh_green_arrow" src="/images/exhibition_assets/arrow_green.svg" alt=""></img>
          </div>
          <Button className="exh_submit_btn" href="exhibitions/craftmanship/CraftmanshipQuestions/4thQuestionCraftmanship">
            <h1 style={{color: "white"}}>Exit Exhibition</h1>
          </Button>
  </div>
</div>

  </div>
</BaseExhibitionCraftmanship>
    )
  }

export default CraftmanshipObjectOne;