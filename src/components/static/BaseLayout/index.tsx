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
import { ReinheritRESTMode } from "../../../types/reinherit"
import { useCaseMode } from "../../../hooks/useCaseMode";
import { useReinMode } from "../../../hooks/useReinMode"

interface Props {
  children?: any
}

const BaseLayout = ({ children }: Props) => {

  const { modeVal, getModeColorClass } = useReinMode();

  return (
    <React.Fragment>
      <Header />
      <ReinNavBar navColor={getModeColorClass()} modeVal={modeVal} />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}

export default BaseLayout
