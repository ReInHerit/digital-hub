import React from "react"
import Hero from "../components/hero"
import NetlifyCMSAuth from "../components/shared/NetlifyCMSAdminCDN/NetlifyCMSAuth"
import Base from "../components/static/Base"
import Header from "../components/static/Header"
import ReinNavbar from "../components/static/Navbar"

const IndexPage = () => (
  <React.Fragment>
      {/* Entry page has different layout - therefore using this components directly! */}
      <Base>
        <Header />
        <ReinNavbar/>
        <Hero />
            {/* Necessary for users to allow seting a pw after getting the invite mail  */}
            <NetlifyCMSAuth></NetlifyCMSAuth>
      </Base>
  </React.Fragment>
)

export default IndexPage
