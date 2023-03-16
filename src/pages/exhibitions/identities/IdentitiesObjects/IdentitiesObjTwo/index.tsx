import React from "react"
import { Container, Badge, Button, Row, Col } from "react-bootstrap"
import BaseExhibitionIdentities from "../../../../../components/static/BaseExhibitionIdentities"

const IdentitiesObjectOne = () => {

return (
<BaseExhibitionIdentities>
<div className="exh_container_inner_red exh_rm_nav exh_container_border_red">
  <div className="d-grid gap-2">
  <Badge className="badgeIdentities rounded-pill"><h1>ReThinking IDENTITIES</h1></Badge>
  </div>
  <div className="identities">
  <h4 className="identities">

    In her self-portrait, the artist Ida Sofia Maly staged herself as a “garçonne” – a boyish-looking woman with short hair, shirt and tie. The portrait takes up the progressive ideas of the emphatically anti-bourgeois bohemian scene in Munich. In this, she not only reflected the artistic mood of the time – she was a step ahead.
  </h4>

  <Badge className="badgeIdentities rounded-pill exh_m_btm"><h1>The story behind the self-portrait of Ida-Sofia Maly</h1></Badge>
  <div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-ida-maly.html" width="1000" height="800"></iframe>
</div>


<Badge className="badgeIdentities rounded-pill exh_m_btm mt-5"><h1>Explore the self-portrait and learn more</h1></Badge>

<div className="exh_h5p_iframe">
<iframe src="https://collection.reinherit-hub.eu/h5p-ida-maly-annotations.html" width="1000" height="1200"></iframe>
</div>

<div className="exh_h5p_2dviewer">
</div>

<div className="exh_object_btm">
<div className="exh_bullet_btn">Get to know other objects</div>
    <Row>
      <Col md={6} xs={12}>  
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjOne">
          <img alt="First Object" src="images/identities/small-cycladic-figurine.jpg"  width={"auto"} max-height={"35%"}>
          </img></a>
      </Col>
      <Col md={6} xs={12}>
          <a href="exhibitions/identities/IdentitiesObjects/IdentitiesObjThree">
          <img alt="Third Object" src="images/identities/small-temple-boy.jpg"  width={"auto"} max-height={"35%"}>
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
          </Button>  </div>
</div>

  </div>
</BaseExhibitionIdentities>
    )
  }

export default IdentitiesObjectOne;