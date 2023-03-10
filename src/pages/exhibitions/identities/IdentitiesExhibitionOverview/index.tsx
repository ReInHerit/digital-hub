import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../components/static/BaseExhibitionIdentities"

const ConflictExhibitionObjects: React.FC = () => {

return (
<BaseExhibitionIdentities>
<div className="exh_container_inner_red exh_rm_nav exh_container_border_red">

  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
 
  <div className="identities">
  <h4 className="mt-5">
  Today, the notions of gender, sexual diversity and discrimination are more relevant than ever. We constantly face gender issues, instances of discrimination in all spheres of life and changing attitudes towards sexual diversity. However, these phenomena may not be as novel as one would think. 
  <br></br><br></br>
  Distinct gender roles have always existed in society from the prehistoric era to our contemporary world. Although it is not easy to make assumptions on the role that women and men held in the Early Cycladic society, we can assume that women and men held different but important roles. More information on the different roles of men and women emerged during the Historic Period. 
  <br></br><br></br>
  Written evidence and representations on clay vessels are the main sources of information on daily life and the role of men and women in society. Potters decorated the vessels with scenes from aristocrats’ everyday life and habits. In this exhibition, we focus on three key objects which connect identities from the Early Cycladic society to today’s world.
  <br></br><br></br>
  </h4>
</div>

<div id="objectsIdentities">
<div className="exhibObject-grid">
<div className="exh_bullet_btn">choose one object</div>
  <Row>
  <Col md={6} xs={12}>
    <div className="exhibObject"  style={{width: "40vw", height:"30vw"}}>
          <img className="img-fluid" alt="First Object" src="images/identities/small-cycladic-figurine.jpg" width={"100%"} height={"auto"}></img>
        <div className="back">
          
          <h3>Cycladic female figurine</h3>
         <p>Which was the role of the woman represented by the female figurine?</p>
         <div className="desc_bottom">
         <img className="arrow_detail" src="/images/exhibition_assets/arrow_red.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/identities/IdentitiesObjects/IdentitiesObjOne">see more</Button>
          </div>
        </div>
    </div>

    </Col>
    <Col md={6} xs={12}>
  <div className="exhibObject" style={{width: "30vw", height:"30vw", left:"10vw"}}>
        <div className="front">
          <img className="img-fluid" alt="Second Object" src="images/identities/small-ida-maly.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
        <h3>Self-portrait</h3>
        <p>Which was the role of the woman in the 1920’s?</p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_red.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/identities/IdentitiesObjects/IdentitiesObjTwo">see more</Button>
          </div>
          </div>
    </div>
  </Col>
  </Row>
  <Row className="mt-5">
  <Col md={6} xs={12}>
  <div className="exhibObject exhibThird" style={{width: "30vw", height:"30vw"}}>
        <div className="front">
          <img className="img-fluid" alt="Third Object" src="images/identities/small-temple-boy.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
          <h3>Temple Boy</h3>
          <p>What is a votive offering? </p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_red.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/identities/IdentitiesObjects/IdentitiesObjThree">see more</Button>
          </div>
        </div>
    </div>
  </Col>
</Row>
</div>
</div>

  </div>
</BaseExhibitionIdentities>
    )
  }



export default ConflictExhibitionObjects