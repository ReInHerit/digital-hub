import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import GameDocFeed from "../../components/shared/GameDocFeed";
import MainHeading from "../../components/static/MainHeading";

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
    <GameDocFeed></GameDocFeed>
  </BaseLayout>
  ) 
}

export default GameDocPage