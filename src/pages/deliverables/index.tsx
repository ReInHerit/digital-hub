import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import DeliverablesFeed from "../../components/shared/DeliverablesFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const DeliverablesPage = () => {
    return (
      <SSRProvider>
      <BaseLayout
      pageTitle="Deliverables | ReInHerit Digital Hub"
      >
        <MainHeading subHeading="Download the public deliverables of the H2020 ReInHerit project."
          breadCrumb={[
            {label:"Resources", value:"/resources"},
            {label:"Deliverables", value:"/deliverables"}
          ]}        
        >Project Deliverables</MainHeading>
        <h4>All the Project results are also available via the EU Portal CORDIS <a href="https://cordis.europa.eu/project/id/101004545/results">at this link</a>.</h4>
    <DeliverablesFeed></DeliverablesFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default DeliverablesPage;