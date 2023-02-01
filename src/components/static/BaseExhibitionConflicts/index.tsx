import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/index.css"
import { Container, Row, Col } from "react-bootstrap"
import Base from "../Base"
import Head from "../Head"
import ReinNavbarExhibConflict from "../navbarExhibitionConflicts"
// import ReinNavbarExhib from "../navbarExhibition"

interface Props {
  children?: any;
  pageTitle?: string
}

const BaseExhibitionConflict = ({ children, pageTitle }: Props) => {
  return (
    <Base>
      <Head pageTitle={pageTitle}></Head>
      <ReinNavbarExhibConflict/>
      <Container
        className="rein_main_container pt-sm-4 pt-md-0"
        style={{marginTop:"3vh", backgroundColor:"white"}}
        fluid
      >{children}</Container>
      <Container
        style={{backgroundColor:"black"}}
        fluid>
          <Row>
            <Col>
            <p style={{color:"white"}}>This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545.</p>
            </Col>
            <Col>
            <a style={{color:"white"}} href="./impressum">Impressum</a>
            </Col>
          </Row>
        </Container>
    </Base>
  )
}

export default BaseExhibitionConflict
