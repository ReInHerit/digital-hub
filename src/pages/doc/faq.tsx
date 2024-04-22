import React from "react"
import { Container, Accordion } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const FAQPage = () => {
  return (
    <BaseLayout 
      pageTitle="FAQ | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Frequently Asked Questions about the ReInHerit Digital Hub">FAQ</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is the ReInHerit Digital Hub?</Accordion.Header>
            <Accordion.Body>
            The ReInHerit Digital Hub is part of the H2020 ReInHerit project. The Hub collects and presents all the project outputs,
            hosts a variety of training material and resources documenting our technological applications, and it aims to serve as a 
            knowledge base and meeting point for professionals working across cultural heritage, cultural tourism, and new technologies.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Who is behind the Digital Hub?</Accordion.Header>
            <Accordion.Body>
            You can find <a href="/about/team">here</a> the members of the ReInHerit consortium. The team at the University of Graz, Centre for Information Modelling, 
            is responsible for the development of the Digital Hub infrastructure.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I contribute to the ReInHerit Digital Hub and how?</Accordion.Header>
            <Accordion.Body>
            Sure! We are happy to welcome contributions from the community! If you are interested, please get in touch via the email
            (you find it at the footer of this page) or by contacting directly the team at the University of Graz. We will be in touch
            to support you in sharing your content and we will review it before publication.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Is there a networking possibility?</Accordion.Header>
            <Accordion.Body>
            Yes, the <a href="/forum">ReInHerit Forum</a> aims to support networking around themes of common interest for the community.
            Feel free to join and participate in our regular chats!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is there also an official project website?</Accordion.Header>
            <Accordion.Body>
            Yes - while the Hub presents the results of our work, you can remain updated also via the 
            <a href="https://www.reinherit.eu/">project webiste</a>, and the newsletter you find there.   
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>I am trying to upload new content on the Hub, how can I get more information on the workflow?</Accordion.Header>
            <Accordion.Body>
            You find a first practical and short introduction in the <a href="/doc/howto">manual for contributors</a>. If you are encountering other problems,
            please contact the team at the University of Graz.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>I uploaded an image, but the size seems wrong. What should I do?</Accordion.Header>
            <Accordion.Body>
              It is likely that your image is bigger than the set limit for image uploads or with incorrect proportions. 
              If so you can either resize the image or ask the team at the University of Graz to allow special conditions for images
              in your Hub area.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Can I save a CMS entry as draft?</Accordion.Header>
            <Accordion.Body>
            Yes, on the top of each CMS entry you might enable/disable "draft" status for your content via a toggle element (in most cases).
            Alternatively, some sections such as "Best Practices" have a custom field for signalling when the content is completed and can be published.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Why is my content not immediately visible in the Hub?</Accordion.Header>
            <Accordion.Body>
            The Digital Hub is a static website, which needs to be regenerated for every new item of content. This process is controlled
            by the Hub admins, who perform a quality check on the content before regenerating and redeploying the new posts. 
            Usually, we aim to check any new content and publish it twice a week - but if you need to work with a different timeline, you
            can agree a specific date with the team at the University of Graz.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </Container>
    </BaseLayout>
  )
}

export default FAQPage
