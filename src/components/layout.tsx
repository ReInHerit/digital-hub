/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import Box from "@material-ui/core/Box"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight:"60vh",
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}


export default Layout
