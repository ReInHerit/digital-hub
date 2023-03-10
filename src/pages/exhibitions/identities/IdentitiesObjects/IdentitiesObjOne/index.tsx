import React, { useRef } from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const IdentitiesObjectOne = () => {

return (
<BaseExhibitionIdentities>
<div className="exh_container_inner_red exh_rm_nav exh_container_border_red">
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4 className="identities">

  The marble figurines are the masterpieces of Cycladic Art and some of the most preliminary representations of human form. The almost planar, marble forms characterized by simplicity and harmonious proportions, impressed and inspired artists such as Brancusi, Modigliani and others at the beginning of the 20th century. 
  </h4>

  <Badge className="badgeIdentities rounded-pill exh_m_btm"><h1> ...</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-female-figurine.html" width="1000" height="800"></iframe>
</div>

<div className="exh_sketchfab_iframe"> 
<div className="sketchfab-embed-wrapper mt-5"> 
<iframe title="Female figurine of the Dokathismata variety"
src="https://sketchfab.com/models/63c8e13ed41e40eaa5b471c852e1491d/embed"
width="100%" height="100%" > 
</iframe> 
</div>
</div>

<Badge className="badgeIdentities rounded-pill exh_m_btm"><h1> Cycladic Society | A Video Poem </h1></Badge>
<div className="exh_sketchfab_iframe"> 
<iframe height={"500vw"} width={"100%"} src="https://www.youtube.com/embed/erl8R-LfHIg" allowFullScreen></iframe>
</div>


<div className="exh_object_btm">
<div className="exh_bullet_btn">Get to know other objects</div>
    <Row>
      <Col md={6} xs={12}>  
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjTwo">
          <img alt="Second Object" src="images/identities/small-ida-maly.jpg" width={"auto"} max-height={"35%"}>
          </img></a>
      </Col>
      <Col md={6} xs={12}>
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjThree">
          <img alt="Third Object" src="images/identities/small-temple-boy.jpg" width={"auto"} max-height={"35%"}>
          </img></a>
      </Col>
    </Row>
</div>


<div className="exh_submit_button">
          <div className="exh_arrow_container">
              <img className="exh_red_arrow" src="/images/exhibition_assets/arrow_red.svg" alt=""></img>
          </div>
          <Button className="exh_submit_btn" href="exhibitions/identities/IdentitiesQuestions/4thQuestionIdentities">
            <h1 style={{color: "white"}}>Exit Exhibition</h1>
          </Button>
  </div>
</div>

  </div>
</BaseExhibitionIdentities>
    )
  }

export default IdentitiesObjectOne;