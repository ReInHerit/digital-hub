import React from "react"
import { Accordion, Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const Authorization = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Materials / manuals about the ReInHerit digital-hub itself" subText="Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself.">Documentation</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout left={<DocNav />}>
        <h3>Access levels / roles in the Digital Hub</h3>
        <p>Overview of the basic access levels the digital hub provides. In short: if content should be contributed to the digital-hub enviroment then - depending on the used funcationality - authentication (is the user wo he/she claims to be?) and authorization (what access levels has the user?) are required.</p>
        <p>Below the list of authorization levels / roles of the digital-hub:</p>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Visitor</Accordion.Header>
            <Accordion.Body>The most basic role used in the digital-hub is the anonymous visitor (with no login / authentication required). A visitor might read public available content on the digital-hub and read the discussions in public available chat-rooms. A visitor is not allowed to participate in private chat or to contribute content to the digital-hub itself.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Professional</Accordion.Header>
            <Accordion.Body>A professional is an authenticated user with verified identity. These kind of users are allowed to join various chat-rooms, contribute to discussions and to add other users to chat rooms. A professional cannot access the content management system of the digital-hub, nor create chat-rooms inside the ReInHerit project environment. Authentication (=login) process is done via using external authenication providers like github / twitter etc.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Hub member</Accordion.Header>
            <Accordion.Body>A project member is a professional with active membership to the ReInHerit github organization. A project member has more control over chat functionalities but no access to the CMS of the digital-hub. </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Hub moderator</Accordion.Header>
            <Accordion.Body>A hub moderator is a hub member with additional membership in the "hub-moderators" github team. A hub moderator has full CMS and full chat access. A hub moderator cannot delete code repositories nor has he/she access to the internal configurations.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Hub admin</Accordion.Header>
            <Accordion.Body>A hub admin is an authorized member inside the ReInHerit github organization. A hub admin has full control over all functionalities needed for the development of the digital-hub</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default Authorization
