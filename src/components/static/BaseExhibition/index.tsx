import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/index.css"
import "../../../styles/tronic.css"
import { Container, Row, Col } from "react-bootstrap"
import Base from "../Base"
import Head from "../Head"
import ReinNavbarExhib from "../navbarExhibition"

interface Props {
  children?: any;
  pageTitle?: string
}

const BaseExhibition = ({ children, pageTitle }: Props) => {
  return (
    <Base>
      <Head pageTitle={pageTitle}></Head>
      <ReinNavbarExhib></ReinNavbarExhib>
      <Container className="exhbition_main_container" style={{backgroundColor:"white"}} fluid >{children}</Container>
      <Container style={{backgroundColor:"black"}} fluid className="exh_footer">
            <Container style={{ padding:"10px 0"}}>
          <Row>
            <Col xs={6}>
            <div className="exh_footer_grid"><img className="exh_img" src="/images/exhibition_assets/cc-sticker-2007.png"></img><p style={{color:"white"}}>All rights reserved excluding works shared under Creative Commons licensing. <br></br>Licenses are indicated for respective elements.</p></div>
            </Col>
            <Col xs={6}>
            <div className="exh_footer_grid"><img className="exh_img" src="/images/exhibition_assets/logo-ce-horizontal-en-neg-nb.png"></img><p style={{color:"white"}}>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545</p></div>
            </Col>
          </Row>
          <Row>
            <Col className="exh_footer_links">
            <a style={{color:"white"}} href="./impressum">Impressum</a>
            <a style={{color:"white"}} href="./datenschutz">Datenschutz</a>
            </Col>
          </Row>
          </Container>
        </Container>
    </Base>
  )
}

export default BaseExhibition
