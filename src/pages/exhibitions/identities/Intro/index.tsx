import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdent from "../../../../components/static/BaseExhibitionIdentities"

const exhibitionObjects: React.FC = () => {

const [flipOne, setFlipOne] = React.useState(false)
const [flipTwo, setFlipTwo] = React.useState(false)
const [flipThree, setFlipThree] = React.useState(false)


return (
<BaseExhibitionIdent>
  <Container fluid className="mt-5 p-5" style={{borderColor: "blue"}}>
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4>Conflicts have accompanied mankind from the very beginning. They are an intrinsic part of social systems. They mani- fest themselves in different forms such as fight, dispute, classism and
competition, strike and industrial conflict, class struggle/class conflict and rebellion, war and civil war.

<p style={{color:"blue"}}>„People like to say that the conflict is between good and evil.
 The real conflict is between truth and lies.“ Person XY </p>
Conflicts can have different functions for society: they can relieve social tensions and, under
certain conditions, even become the decisive motor for necessary social changes. Conversely,
conflicts can escalate to such a high level and be carried out so destructively that they have fatal
consequences for the people (societies) affected. < br/>
Right now we experience multiple forms of crises. We can not foresee where these are leading
us, as indivi- duals, on a national and on a global level. It is only clear that the world is undergoing a massive process of change. In this situation, conflicts are a normal and inevitable consequence. Post-modern, individualistic so- cieties that exhibit only weak social cohesion can cope
less effectively with conflicts. It is therefore important to gain a deeper understanding of conflicts, their dynamics, the underlying systemic issues and the roles of each and everybody.</h4>
</div>

<div id="objectsIdentities">
<div className="exhibObject-grid">
<Row>
  <Col>
  <Row>
    <div className={`exhibObject ${flipOne ? "flipOne" : ""}`}  style={{width: "40vw", height:"30vW"}}>
        <div className="front" onClick={() => setFlipOne(!flipOne)}  >
          <img alt="First Object" src="https://ucarecdn.com/dac6b34f-942d-4491-bbb4-34bb14ee8ce1/" height={"auto"} width={"100%"} max-width={"100%"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipOne(!flipOne)}  >
          <p>
          OBJECT TITEL <br />
          The following three objects deal with rising food prices and the effects of war, with geopolitical conflicts and social hierarchies.
          The following three objects deal with rising food prices and the effects of wars. The following three objects deal 
          with rising food prices and the effects of war, with geopolitical conflicts and social.
          </p>
          <Button variant="primary" href="exhibitions/identities/objOne">see more</Button>
        </div>
    </div>
  </Row>
  <Row>
    <div className={`exhibObject ${flipTwo ? "flipTwo" : ""}`}  style={{width: "40vw", height:"30vW"}}>
        <div className="front" onClick={() => setFlipTwo(!flipTwo)}  >
          <img alt="Second Object" src="https://ucarecdn.com/dac6b34f-942d-4491-bbb4-34bb14ee8ce1/" height={"auto"} width={"100%"} max-width={"100%"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipTwo(!flipTwo)}  >
          <p>
          this is not working, only the first object has been implemented for this demo.</p>
        <Button variant="primary" href="">see more</Button>
        </div>
    </div>
  </Row>
  </Col>
  <Col>
    <div className={`exhibObject ${flipThree ? "flipThree" : ""}`}  style={{width: "40vw", height:"30vW"}}>
        <div className="front" onClick={() => setFlipThree(!flipThree)}  >
          <img alt="Third Object" src="https://ucarecdn.com/dac6b34f-942d-4491-bbb4-34bb14ee8ce1/" height={"auto"} width={"100%"} max-width={"100%"}>
          </img>
        </div>
        
        <div className="back" onClick={() => setFlipThree(!flipThree)}  >
          <p>
          this is not working, only the first object has been implemented for this demo.</p>
          <Button variant="primary" href="">see more</Button>
        </div>
    </div>
  </Col>
</Row>
</div>
</div>

  </Container>
</BaseExhibitionIdent>
    )
  }



export default exhibitionObjects