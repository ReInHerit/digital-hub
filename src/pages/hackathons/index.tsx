import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import HackathonsFeed from "../../components/shared/HackathonsFeed";
import MainHeading from "../../components/static/MainHeading";

const HackathonsPage = () => {

  return <BaseLayout
  pageTitle="Hackathons | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="ReInHerit Hackathons."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Hackathons", value:"/hackathons"}
      ]}
    >ReInHerit Hackathons</MainHeading>
    <HackathonsFeed></HackathonsFeed>
  </BaseLayout>

}


export default HackathonsPage;