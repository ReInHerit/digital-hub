import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../../components/static/BaseExhibitionConflicts"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ConflictObjectOne = () => {

return (
<BaseExhibitionConflict>
  <Container fluid className="mt-5 p-5">
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 className="conflicts">The Cherry Rage 1920 is a woodcut by the Austrian artist Axl Leskoschek. Created in 1955 , it intentionally uses the technique of the woodcut, which was a medium of protest art. The appeal of
the woodcut is its reproductibility. The stencil, cut from wood is reusable and can produce infinite copies.</h4>

<Badge className="badgeConflicts rounded-pill"><h1>The Story of the Cherry Rage</h1></Badge>

<div>
<iframe src="https://h5p.org/h5p/embed/1307786" width="1090" height="1109" frameborder="0" 
allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" 
title="The Story of the Cherry Rage"></iframe>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
</div>

<Badge className="badgeConflicts rounded-pill"><h1>Zoom in and explore this object</h1></Badge>
<div style={{width:"80%", height:"auto"}}> 
<Zoom>
    <img
      src="images/conflicts/large-CiproMapBoCCF.jpg" 
      alt="Map of Cyprus, BoCCF"
      width="80%"
    />
  </Zoom></div>

<div className="mt-5">
    <h4>Get to know other objects</h4>
    <Row>
        <Col>  
        <a href="exhibitions/conflicts/ConflictObjects/ConflictObjOne">
        <img alt="First Object" src="images/conflicts/small-CherryRageGM.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
        </img></a>
        </Col>
        <Col>
        <a href="exhibitions/conflicts/ConflictObjects/ConflictObjTwo">
        <img alt="Second Object" src="images/conflicts/small-PyxisMCA.jpg" height={"auto"} width={"100%"} max-width={"100%"}>
        </img></a>
        </Col>
    </Row>
</div>


<div className="d-grid gap-2">
<Button href="exhibitions/conflicts/ConflictQuestions/4thQuestionConflict" className="btn-primary rounded-pill m-5"><h1 style={{color: "white"}}>Exit Exhibition</h1></Button>
</div>
</div>

  </Container>
</BaseExhibitionConflict>
    )
  }

export default ConflictObjectOne;