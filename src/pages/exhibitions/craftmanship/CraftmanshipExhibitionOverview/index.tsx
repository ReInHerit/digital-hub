import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../components/static/BaseExhibitionConflicts"

const CraftmanshipExhibitionObjects: React.FC = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">

  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CRAFTMANSHIP</h1></Badge>
 
  <div className="conflicts">
  <h4 className="mt-5">
  As part of intangible cultural heritage, craftsmanship practices not only represent past traditions, but also contemporary methods of production focusing on the sustainable use of natural materials and local manufacturing. 
  <br></br><br></br>
  ReThinking CRAFTSMANSHIP aims to highlight different types of intangible cultural heritage within the field of craftsmanship in relation to natural materials and the processes they undergo, and how they relate to the current discourse on sustainability and environmental issues.
  <br></br><br></br>
  Traditions, knowledge and techniques that are passed on from generation to generation are always evolving in response to a fastly changing world, and continue to provide communities with a sense of identity and respect for cultural diversity.
  <br></br><br></br>
  </h4>
</div>

<div id="objectsConflicts">
<div className="exhibObject-grid">
<div className="exh_bullet_btn">choose one object</div>
  <Row>
  <Col md={6} xs={12}>
    <div className="exhibObject"  style={{width: "40vw", height:"30vw"}}>
          <img alt="First Object" src="images/craftmanship/small-coccoon-frame.jpg" width={"100%"} height={"auto"}></img>
        <div className="back">
          
          <h3>Frame</h3>
         <p>How do you use a material considered “useless” by some?</p>
         <div className="desc_bottom">
         <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjOne">see more</Button>
          </div>
        </div>
    </div>

    </Col>
    <Col md={6} xs={12}>
  <div className="exhibObject" style={{width: "30vw", height:"30vw", left:"10vw"}}>
        <div className="front">
          <img alt="Second Object" src="images/craftmanship/small-white-lekythos.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
        <h3>Lekythos</h3>
        <p>Are ancient pottery methods still in practice today?</p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjTwo">see more</Button>
          </div>
          </div>
    </div>
  </Col>
  <Col md={6} xs={12}>
  <div className="exhibObject exhibThird" style={{width: "30vw", height:"30vw"}}>
        <div className="front">
          <img alt="Third Object" src="images/craftmanship/small-guild-chest.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
          <h3>Chest</h3>
          <p>Who did this chest belong to and what is it guarding?</p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/craftmanship/CraftmanshipObjects/CraftmanshipObjThree">see more</Button>
          </div>
        </div>
    </div>
  </Col>
</Row>
</div>
</div>

  </div>
</BaseExhibitionConflict>
    )
  }

export default CraftmanshipExhibitionObjects