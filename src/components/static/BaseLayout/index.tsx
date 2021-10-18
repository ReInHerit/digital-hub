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
import { useReinMode } from "../../../hooks/useReinMode"
import Base from "../Base"

interface Props {
  children?: any
}

const BaseLayout = ({ children }: Props) => {
  const { modeVal, setMode, theme } = useReinMode();

  return (
    <Base>
      <Header />
      <ReinNavBar
        setMode={setMode}
      />
      <Container
        className="rein_main_container"
      >{children}</Container>
      <Footer />
    </Base>
  )
}

export default BaseLayout
