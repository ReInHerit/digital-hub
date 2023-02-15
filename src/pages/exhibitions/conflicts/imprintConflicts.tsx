import React from "react"
import { Container, Button } from "react-bootstrap"
import BaseExhibitionConflict from "../../../components/static/BaseExhibitionConflicts"

const ImprintConflicts = () => {

return (
<BaseExhibitionConflict>
  <Container fluid style={{backgroundColor:"white"}}>
  <div className="exh_container_inner mt-5 exh_content_text">
    <h4 className="exhcontentHeading">Imprint</h4>
    <p>The ReInHerit Digital Hub was developed in the H2020 project ReInHerit, funded by the European Union’s Horizon 2020 Research and Innovation programme under grant agreement No 101004545.</p>
    <p>This digital exhibition is part of Work Package 6, led by the <a href="https://www.grazmuseum.at/">Graz Museum (Stadtmuseum Graz GmbH)</a>, in cooperation with the <a href="https://cycladic.gr/en">Museum of Cycladic Art</a> and the <a href="https://www.boccf.org/">Bank of Cyprus Cultural Foundation</a>.</p>
    <p>Design: <a href="https://studio-itzo.com/">studio-itzo</a>.</p>
    <p>Website development: <a href="https://informationsmodellierung.uni-graz.at/en/">Institute Centre for Information Modelling - Austrian Centre for Digital Humanities</a> and <a href="https://tronic.digital/">TRONIC</a>.</p>
    <p>For more information about the ReInHerit Digital Hub and project, see <a href="https://reinherit-hub.eu/">here</a>.</p>
  </div>
  </Container>
</BaseExhibitionConflict>
    )
  }

export default ImprintConflicts;