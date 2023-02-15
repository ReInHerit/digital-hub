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
      <Container
        className="exh_main_content mt-2"
        style={{backgroundColor:"white"}}
        fluid 
      >{children}</Container>
     
    </Base>
  )
}

export default BaseExhibitionConflictDE

