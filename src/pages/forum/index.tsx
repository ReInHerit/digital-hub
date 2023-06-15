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
    
<Button variant="primary" size="lg" className="mt-5" style={{marginLeft: "35%", marginRight: "35%", fontSize: "35px", borderRadius: "45px"}} href="https://reinherit.zulipchat.com/">Enter the Forum</Button>

<h3 className="mt-5">Quick graphic guide</h3>
<p>Once you login, you will see a screen divided in three columns:</p>
<ul>
  <li>On the left, you will have a sidebar that allows you to: quickly navigate to things that might interest you the most (recent messages, direct messages, drafts, and starred ones); direct messages (these are private messages between you and other users); and the streams. The <b>streams</b> are macro-themes, grouping different <b>topics</b> (you can think of them as chat rooms, including different chats on that theme); within a stream, you can open a new topic or answer to existing ones.</li>
  <li>In the central, larger section, you see the messages and, at the bottom of your screen, you will have the box for entering your text.</li>
  <li>On the right, you can see if other users are online, and eventually invite colleagues to join the forum.</li>
</ul>

<img className="mt-5" alt="Forum Graphic Guide" src="/images/forumInfo.jpg" height={"auto"} width={"90%"} max-width={"100%"} style={{marginLeft: "5%", marginRight: "5%"}}></img>

    </div>
    </Container>
    </BaseLayout>
  )
}

export default Forum
