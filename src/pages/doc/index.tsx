import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const DocAbout = () => {
  return (
    <BaseLayout
    pageTitle="Documentation | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Documentation and Use of the ReInHerit Digital Hub"
        breadCrumb={[{label:"About", value:"/about"}, {label:"Documentation", value:"/doc"}]}
      >Documentation</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout
        left={<DocNav/>}
      >
        
        <h2>Digital Hub: overview of architecture</h2>
        <p>
          The ReInHerit's Digital Hub is a static website, coded in React, and generated with Gatsby. It integrates other services 
          to support the workflows and delivery of the content. In general, the Hub follows the JAM-stack (Javascript, APIs, and Markup) architectural approach. 
        </p>
        <h3>Technologies</h3>
        <p>
          The open source static site generator <a href="https://www.gatsbyjs.com/">Gatsby JS</a> was chosen as the main framework for the Hub. 
          Gatsby uses React and GraphQL, enabling the querying of the data and the development of the different site components. In order
          to facilitate the addition of content by the project partners, Gatsby was paired with <a href="https://decapcms.org/">Decap CMS</a> (formerly Netlify CMS),
          an open source content manangement system facilitating the creation of entries for the website through an user-friendly interface.
          The Hub is hosted on GitHub and it integrates therefore GitHub oauth for the login into Netlify.
        </p>
        <p>
        Additional functionalities are provided by Upload Care, to support media files, and by Zulip, supporting forum and chatting possibilities.
        </p>
        <h3>Content-related workflows</h3>
        <p>
        Once authorised, contributors can login into the Netlify CMS and add material to the Digital Hub. Each of the content in
        ReInHerit had specific requirements (analysed in Deliverable 4.1) and received a customised template and query functionalities
        within the Hub. On the backend, this means that different (markdown based) models for the individual outputs are being used to 
        render different views on the public interface through templates (also exploiting GraphQL queries functionalities). 
        </p>
        <p>
        As a rule, the design has been kept consistent across the Hub - with the exception of the digital exhibitions - and links 
        across the different sections (e.g. webinars and apps documentation) are offered whenever possible.
        </p>
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default DocAbout
