import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../components/static/BaseExhibitionConflicts"

const ConflictExhibitionObjects: React.FC = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">

  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
 
  <div className="conflicts">
  <h4 className="mt-5">
  Conflicts arise between individuals, social groups or nations and peoples. They are multi-layered and complex. Objects are often preserved as important traces.<br></br>How conflicts enter the collective memory culture depends on prevailing power structures and the respective representation and narrative. <br></br>How can we interpret these today? <br></br>How much does today influence our view of past conflicts? <br></br>How do we deal with recurring conflicts over the centuries?
  <br></br><br></br>In the following, we take a look at three digital objects of different historical conflicts and contexts from different perspectives. These highlight the complexity of conflicts and encourage us to challenge traditional narratives.
  <br></br><br></br></h4>
</div>

<div id="objectsConflicts">
<div className="exhibObject-grid">
<div className="exh_bullet_btn">choose one object</div>
  <Row>
  <Col md={6} xs={12}>
    <div className="exhibObject"  style={{width: "40vw", height:"30vw"}}>
          <img alt="First Object" src="images/conflicts/small-CherryRageGM.jpg" width={"100%"} height={"auto"}></img>
        <div className="back">
          
          <h3>Cherry Rage</h3>
         <p>What do conflicts have to do with food shortages and rising prices?</p>
         <div className="desc_bottom">
         <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjOne">see more</Button>
          </div>
        </div>
    </div>

    </Col>
    <Col md={6} xs={12}>
  <div className="exhibObject" style={{width: "30vw", height:"30vw", left:"10vw"}}>
        <div className="front">
          <img alt="Second Object" src="images/conflicts/small-PyxisMCA.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
        <h3>Pyxis</h3>
        <p> To whom did this artful box belong and what conflicts does it hold?
          </p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjTwo">see more</Button>
          </div>
          </div>
    </div>
  </Col>
  <Col md={6} xs={12}>
  <div className="exhibObject exhibThird" style={{width: "30vw", height:"30vw"}}>
        <div className="front">
          <img alt="Third Object" src="images/conflicts/small-CiproMapBoCCF.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back">
          <h3>Cipro</h3>
          <p>What do maps tell us about conflict?
          </p>
          <div className="desc_bottom">
          <img className="arrow_detail" src="/images/exhibition_assets/arrow_blue.svg" alt="arrow_details"></img>
          <Button className="exh_see_more" variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjThree">see more</Button>
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



export default ConflictExhibitionObjects