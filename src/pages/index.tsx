import React from "react"
import Hero from "../components/hero"
import NetlifyCMSAuth from "../components/shared/NetlifyCMSAdminCDN/NetlifyCMSAuth"
import Base from "../components/static/Base"
import Footer from "../components/static/Footer"
import Head from "../components/static/Head"
import Header from "../components/static/Header"
import ReinNavbar from "../components/static/Navbar"
import {SSRProvider} from '@react-aria/ssr'; 


const IndexPage = () => (
<SSRProvider>
  <React.Fragment>
    {/* Entry page has different layout - therefore using this component directly! */}
    <Base>
      <Head
        pageTitle="Home | ReInHerit Digital Hub"
      />
      {/* <Header /> */}
      <ReinNavbar />
      <Hero />
      {/* Necessary for users to allow setting a pw after getting the invite mail  */}
      <NetlifyCMSAuth></NetlifyCMSAuth>
      <Footer></Footer>
    </Base>
  </React.Fragment>
  </SSRProvider>
)

export default IndexPage
