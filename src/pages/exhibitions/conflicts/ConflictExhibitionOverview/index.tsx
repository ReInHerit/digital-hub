import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionConflict from "../../../../components/static/BaseExhibitionConflicts"

const ConflictExhibitionObjects: React.FC = () => {

const [flipOne, setFlipOne] = React.useState(false)
const [flipTwo, setFlipTwo] = React.useState(false)
const [flipThree, setFlipThree] = React.useState(false)


return (
<BaseExhibitionConflict>
  <Container fluid className="mt-5 p-5" style={{borderColor: "blue"}}>
  <div className="d-grid gap-2">
  <Badge className="badgeConflicts rounded-pill"><h1>ReThinking CONFLICTS</h1></Badge>
  </div>
  <div className="conflicts">
  <h4 style={{color:"blue"}}>
  Conflicts arise between individuals, social groups or nations and peoples. They are multi-layered and complex. Objects are often preserved as important traces. How conflicts enter the collective memory culture depends on prevailing power structures and the respective representation and narrative. How can we interpret these today? How much does today influence our view of past conflicts? How do we deal with recurring conflicts over the centuries?
In the following, we take a look at three digital objects of different historical conflicts and contexts from different perspectives. These highlight the complexity of conflicts and encourage us to challenge traditional narratives.
  </h4>
</div>

<div id="objectsConflicts">
<div className="exhibObject-grid">
<Row>
  <Col>
  <Row>
    <div className={`exhibObject ${flipOne ? "flipOne" : ""}`}  style={{width: "40vw", height:"30vw"}}>
        <div className="front" onClick={() => setFlipOne(!flipOne)} >
          <img alt="First Object" src="images/conflicts/small-CherryRageGM.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipOne(!flipOne)}  >
          <p>
          Cherry Rage <br />
          What do conflicts have to do with food shortages and rising prices?
          </p>
          <Button variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjOne">see more</Button>
        </div>
    </div>
  </Row>
  <Row>
  <div className={`exhibObject ${flipTwo ? "flipTwo" : ""}`}  style={{width: "30vw", height:"30vw"}}>
        <div className="front" onClick={() => setFlipTwo(!flipTwo)} >
          <img alt="Second Object" src="images/conflicts/small-PyxisMCA.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipTwo(!flipTwo)}  >
          <p>
          Pyxis<br />
          To whom did this artful box belong and what conflicts does it hold?
          </p>
          <Button variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjTwo">see more</Button>
        </div>
    </div>
  </Row>
  </Col>
  <Col>
  <div className={`exhibObject ${flipThree ? "flipThree" : ""}`}  style={{width: "30vw", height:"50vw"}}>
        <div className="front" onClick={() => setFlipThree(!flipThree)} >
          <img alt="Third Object" src="images/conflicts/small-CiproMapBoCCF.jpg" width={"100%"} height={"auto"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipThree(!flipThree)}  >
          <p>
          Cipro<br />
          What do maps tell us about conflict?
          </p>
          <Button variant="primary" href="exhibitions/conflicts/ConflictObjects/ConflictObjThree">see more</Button>
        </div>
    </div>
  </Col>
</Row>
</div>
</div>

  </Container>
</BaseExhibitionConflict>
    )
  }



export default ConflictExhibitionObjects