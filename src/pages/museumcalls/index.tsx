import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MuseumCallsFeed from "../../components/shared/MuseumCallsFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const MuseumCallsPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
  pageTitle="Calls for Participations"
  breadCrumb={[
    {label:"Participate", value:"/networkinghub"},
    {label:"Museum Calls", value:"/museumcalls"},
  ]}
  >
    <MainHeading
      subHeading="Calls for participations by the ReInHerit museums"
      subText="Host a travelling exhibition or contribute to the digital collection."
      >
    Information about the H2020 Project ReInHerit and its Hub.</MainHeading>
    <MuseumCallsFeed></MuseumCallsFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default MuseumCallsPage;