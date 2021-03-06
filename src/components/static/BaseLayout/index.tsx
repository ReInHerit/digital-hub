/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/index.css"
import React from "react"
import Header from "../Header"
import { Container } from "react-bootstrap"
import ReinNavBar from "../Navbar"
import Footer from "../Footer"
import Base from "../Base"
import Head from "../Head"

interface Props {
  children?: any;
  pageTitle?: string
}

const BaseLayout = ({ children, pageTitle }: Props) => {
  return (
    <Base>
      <Head pageTitle={pageTitle}></Head>
      <Header />
      <ReinNavBar/>
      {/* <QuickAccessBar/> */}
      <Container
        className="rein_main_container pt-sm-4 pt-md-0"
        style={{marginTop:"2vh"}}
        fluid
      >{children}</Container>
      <Footer />
    </Base>
  )
}

export default BaseLayout
