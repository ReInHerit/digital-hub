import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container, Button } from "react-bootstrap"

const Forum: React.FC = () => {
  return (
    <BaseLayout
    pageTitle="Community | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="A public forum for the ReInHerit community."
        breadCrumb={[
          {label:"Participate", value:"/networkinghub"},
          {label:"Forum", value:"/forum"},
        ]}
      >ReInHerit Forum</MainHeading>
    <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
    <div>
    <h4>Join the ReInHerit community!</h4>
    <p>The ReInHerit community has a forum, where we host periodic chats and we have dedicated channels to discuss the webinars, the applications, and a variety of themes in cultural heritage management and tourism.</p>
    <p>Everyone is welcome to join! The Forum is hosted on <a href="https://zulip.com/">Zulip</a>. You will need to register (you can do so, by creating an account or by logging in with your GitHub or Google accounts).</p>
    <p>In the platform, you will find <i>Streams</i>, i.e. top-level themes organising our chats, and <i>topics</i>, i.e. each different thread. The streams include the ReInHerit products (applications, toolkit, webinars, etc.) and themes (cultural tourism, technology in heritage, etc.), as well as a general chatroom and our ReInHerit chats series (i.e. moderated chats happening twice a month). Within each of these streams, you will find different topics, i.e. discussing each of the ReInHerit applications, or for each 'episode' of our ReInHerit chat.</p>
    <p>Zulip is an open source software, with a very detailed document about its data protection policies: you can find more <a href="https://zulip.com/help/gdpr-compliance">here</a> on GDPR compliance; <a href="https://zulip.com/policies/privacy">here</a> in regards of the Privacy Policy, including also GDPR Compliance of the Zulip Cloud, which hosts our chats.</p> 
    
<Button variant="primary" style={{marginLeft: "20%", marginRight: "20%"}} href="https://reinherit.zulipchat.com/">Enter the Forum</Button>

    </div>
    </Container>
    </BaseLayout>
  )
}

export default Forum
