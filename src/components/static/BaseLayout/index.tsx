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
import { Button, Container } from "react-bootstrap"
import ReinNavBar from "../Navbar"
import Footer from "../Footer"
import { ReinheritRESTMode } from "../../../types/reinherit"
import { useCaseMode } from "../../../hooks/useCaseMode"
import { useReinMode } from "../../../hooks/useReinMode"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

interface Props {
  children?: any
}

const BaseLayout = ({ children }: Props) => {
  const { modeVal, getModeColorClass, setMode } = useReinMode()

  return (
    <React.Fragment>
      <Header />
      <ReinNavBar
        navColor={getModeColorClass()}
        modeVal={modeVal}
        setMode={setMode}
      />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  )
}

export default BaseLayout
