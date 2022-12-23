import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdent from "../../../../components/static/BaseExhibitionIdentities"

const IdentObjectOne = () => {

return (
<BaseExhibitionIdent>
  <Container fluid className="mt-5 p-5">
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4>The Cherry Rage 1920 is a woodcut by the Austrian artist Axl Leskoschek. Created in 1955 , it intentionally uses the technique of the woodcut, which was a medium of protest art. The appeal of
the woodcut is its reproductibility. The stencil, cut from wood is reusable and can produce infinite copies.</h4>

<Badge className="badgeIdentities rounded-pill"><h1>The Story of the Cherry Rage</h1></Badge>

<div>
<iframe src="https://h5p.org/h5p/embed/1307786" width="1090" height="1109" frameborder="0" 
allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" 
title="The Story of the Cherry Rage"></iframe>
<script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
</div>

<h4 style={{borderColor: "grey"}}>The Role of the Women <br />
The food supply of the families during and after the First World War was especially taken care of by women. Even after the end of the war, the people were
starving. In the morning of 7th June 1920, the situation got out of control on the
Kaiser-Josef-Markt in Graz. Initially, women demanded affordable food prices,
especially for cherries. The fruit was used as a substitude for sugar, an ingredient which was almost impossible to get hold of...</h4>


<Badge className="badgeIdentities rounded-pill"><h1>Viewer</h1></Badge>

<div> 
<div class="sketchfab-embed-wrapper"> 
<iframe title="Advertising Sign: Cycling City" 
frameborder="0" allowfullscreen mozallowfullscreen="true" 
webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
width="640" height="480" 
src="https://sketchfab.com/models/a0129b0b9a3d472d97dff0f36801bc22/embed"> 
</iframe> 
</div>
</div>

<div className="mt-5">
    <h4>get to know other objects (note: those objects are not implemented - it's just sign-posting images)</h4>
    <Row>
        <Col>  
        <img alt="Second Object" src="https://ucarecdn.com/dac6b34f-942d-4491-bbb4-34bb14ee8ce1/" height={"auto"} width={"100%"} max-width={"100%"}>
        </img>
        </Col>
        <Col>
        <img alt="Second Object" src="https://ucarecdn.com/dac6b34f-942d-4491-bbb4-34bb14ee8ce1/" height={"auto"} width={"100%"} max-width={"100%"}>
        </img>
        </Col>
    </Row>
</div>


<div className="d-grid gap-2">
<Button href="exhibitions/identities/questionFour" className="btn-primary rounded-pill m-5"><h1 style={{color: "white"}}>Exit Exhibition</h1></Button>
</div>
</div>

  </Container>
</BaseExhibitionIdent>
    )
  }

export default IdentObjectOne;