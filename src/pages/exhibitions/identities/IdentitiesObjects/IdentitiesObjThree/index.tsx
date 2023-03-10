import React from "react"
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

  The temple boy is a type of statuette popular in Cyprus as well as the Levant region where many statuettes have been found. Many interpretations as to the use and purpose of the temple boy statuettes have been put forward, mainly that they served as votive offerings to both male and female divinities. 
  </h4>

<Badge className="badgeIdentities rounded-pill exh_m_btm"><h1> ...</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-temple-boy.html" width="1000" height="800"></iframe>
</div>

<div className="exh_sketchfab_iframe"> 
<div className="sketchfab-embed-wrapper mt-5"> 
<iframe title="Servant Boy - Cypriot Sculpture circa 400BC"
src="https://sketchfab.com/models/43f4991c091943d1b2429f5a5b4fccad/embed"
width="100%" height="100%" > 
</iframe> 
</div>
</div>



<div className="exh_object_btm">
<div className="exh_bullet_btn">Get to know other objects</div>
    <Row>
      <Col md={6} xs={12}>  
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjOne">
          <img alt="First Object" src="images/identities/small-cycladic-figurine.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
          </img></a>
      </Col>
      <Col md={6} xs={12}>
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjTwo">
          <img alt="Second Object" src="images/identities/small-ida-maly.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
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