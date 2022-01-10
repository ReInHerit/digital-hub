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

interface Props {
  children?: any
}

const BaseLayout = ({ children }: Props) => {
  return (
    <Base>
      <Header />
      <ReinNavBar/>
      <Container
        className="rein_main_container mt-md-5"
        fluid
      >{children}</Container>
      <Footer />
    </Base>
  )
}

export default BaseLayout
