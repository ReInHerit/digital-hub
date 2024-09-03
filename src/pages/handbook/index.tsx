import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import HandbookFeed from "../../components/shared/HandbookFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const HandbookPage: React.FC = () => {
  return (
    <SSRProvider>
     <BaseLayout
    pageTitle="Handbook On Communication and Collaboration in Museums and Heritage Sites | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="An Handbook presenting the experiences of the H2020 ReInHerit project"
        breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Handbook", value:"/handbook"}
        ]}        
      >Handbook On Communication and Collaboration in Museums and Heritage Sites</MainHeading>
    <HandbookFeed></HandbookFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default HandbookPage;