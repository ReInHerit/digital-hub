import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/index.css"
import "../../../styles/tronic.css"
import { Container, Row, Col } from "react-bootstrap"
import Base from "../Base"
import Head from "../Head"
// import ReinNavbarExhibConflict from "../navbarExhibitionConflicts"
// import ReinNavbarExhib from "../navbarExhibition"

interface Props {
  children?: any;
  pageTitle?: string
}

const BaseExhibitionConflictDE = ({ children, pageTitle }: Props) => {
  return (
    <Base>
      <Head pageTitle={pageTitle}></Head>
      <Container
        className="exh_main_content"
        style={{backgroundColor:"white"}}
        fluid 
      >{children}</Container>
      <Container
        style={{backgroundColor:"black"}}
        fluid>
            <Container style={{ padding:"10px 0"}}>
            <Row>
            <Col xl={6} xs={12}>
            <div className="exh_footer_grid">
              <div className="footer_img"><img className="exh_img" src="/images/exhibition_assets/cc-sticker-2007.png"></img></div>
              <div className="footer_partner_text">
                <p style={{color:"white"}}>All rights reserved excluding works shared under Creative Commons licensing. <br></br>Licenses are indicated for respective elements.</p>
              </div>
            </div>
            </Col>
            <Col xl={6} xs={12}>
            <div className="exh_footer_grid">
              <div className="footer_img"><img className="exh_img" src="/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"></img></div>
              <div className="footer_partner_text"><p style={{color:"white"}}>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545</p>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col className="exh_footer_links">
            <a style={{color:"white"}} href="/exhibitions/conflicts/imprintConflicts">Impressum</a>
            <a style={{color:"white"}} href="/about/dataprot">Datenschutz</a>
            </Col>
          </Row>
          </Container>
        </Container>
    </Base>
  )
}

export default BaseExhibitionConflictDE

