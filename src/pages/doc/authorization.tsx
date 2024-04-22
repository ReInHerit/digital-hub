import React from "react"
import { Accordion, Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const Authorization = () => {
  return (
    <BaseLayout
      pageTitle="User roles | ReInHerit Digital Hub"
    >
      <MainHeading subText="User roles in the Digital Hub.">Documentation</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout left={<DocNav />}>
        <h2>Access levels and roles in the Digital Hub</h2>
        <p>This page offers an overview of the access levels the digital hub provides.</p>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Viewer</Accordion.Header>
            <Accordion.Body>The most basic role is the anonymous viewer
               (with no login / authentication required). A viewer might read content on the Digital Hub, which is all offered with
               open licenses (Creative Commons licenses). A viewer might view the forum archive, but he/she is not allowed
               to see current chats and/or to participate in the forum. He/she also cannot add material to the Digital Hub.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Community member</Accordion.Header>
            <Accordion.Body>A community member is an authenticated user with verified identity, who participates in the forum.
              Authentication is done via the forum platform (Zulip) based on an email or a social media account. These users can participate
              in the forum, creating new topics in the rooms and sending private messages to other forum users. The only information publicly
              available will be the username in the forum and - if the users choses to add one - the profile photo.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Community admin</Accordion.Header>
            <Accordion.Body>A community admin is an authenticated user with verified identity, who participates in the forum and has 
              admin rights on it. Authentication is done via the forum platform (Zulip) based on an email or a social media account. 
              Additionally to community members, an admin has also the power to remove inappropriate content or disruptive users from the forum 
              and close conversations. 
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Digital Hub contributor</Accordion.Header>
            <Accordion.Body>A Digital Hub contributor is a ReInHerit member who contributes directly material to the Digital Hub.
              The GitHub username of a Hub contributor needs to be added by an Hub Admin to the ReInHerit GitHub team. 
              Subsequently, a Hub contributor has full access to the Digital Hub Content Management System (CMS) and is therefore
              able to add and edit content. However, he/she cannot delete code repositories, access internal configurations, and
              directly publish content (publication happens only after a further check by an Hub admin).
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Digital Hub admin</Accordion.Header>
            <Accordion.Body>A Digital Hub admin is a member with full rights within the ReInHerit GitHub organisation. He/she has 
              full control over all functionalities needed for the development of the Digital Hub and the code repositories.
              The admin team is currently composed by University of Graz members, as the team responsible for the development
              of the Digital Hub.              
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default Authorization
