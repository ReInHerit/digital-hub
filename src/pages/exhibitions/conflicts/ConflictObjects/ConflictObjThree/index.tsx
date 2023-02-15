import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ConflictObjectOne = () => {

return (
<BaseExhibitionConflict>
<div className="exh_container_inner exh_rm_nav exh_container_border">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 className="conflicts">The Cherry Rage 1920 is a woodcut by the Austrian artist Axl Leskoschek. Created in 1955 , it intentionally uses the technique of the woodcut, which was a medium of protest art. The appeal of
the woodcut is its reproductibility. The stencil, cut from wood is reusable and can produce infinite copies.</h4>

<Badge className="badgeConflicts rounded-pill"><h1>Cipro Map</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-cipro.html" width="1000" height="1200"></iframe>
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
          <a href="exhibitions/conflicts/ConflictObjects/ConflictObjTwo">
          <img alt="Second Object" src="images/conflicts/small-PyxisMCA.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
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