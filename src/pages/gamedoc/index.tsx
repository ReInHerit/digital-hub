import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import GameDocFeed from "../../components/shared/GameDocFeed";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"

const GameDocPage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Videogame: Documentation"
  >
    <MainHeading
      subHeading="Technical documentation of the development, design, and features of the ReInHerit videogame."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Videogame documentation", value:"/gamedoc"}
      ]}
    >Documentation of the ReInHerit Videogame.</MainHeading>

<div className="blog-post-container" id="markdown_container">
  <div className="blog-post">
  <SideMainLayout
      side={
        <div className="card p-4 border-0 shadow bg-white">
        <GameDocFeed></GameDocFeed>
        </div>
      }
      >  
  <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
        <div>This section documents the design and development process of the ReInHerit videogame, as well as the technologies used. Discover more by exploring the items on the left!</div>
  </Container>
  </SideMainLayout>
  </div>
</div>

  </BaseLayout>
  )
}

export default GameDocPage