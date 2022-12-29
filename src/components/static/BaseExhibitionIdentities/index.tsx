import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/index.css"
import { Container } from "react-bootstrap"
import Base from "../Base"
import Head from "../Head"
import ReinNavbarExhibIdent from "../navbarExhibitionIdentities"

interface Props {
  children?: any;
  pageTitle?: string
}

const BaseExhibitionIdent = ({ children, pageTitle }: Props) => {
  return (
    <Base>
      <Head pageTitle={pageTitle}></Head>
      <ReinNavbarExhibIdent/>
      <Container
        className="rein_main_container pt-sm-4 pt-md-0"
        style={{marginTop:"3vh", backgroundColor:"white"}}
        fluid
      >{children}</Container>
    </Base>
  )
}

export default BaseExhibitionIdent