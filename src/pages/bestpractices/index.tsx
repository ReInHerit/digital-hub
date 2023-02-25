import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import BestPracticesFeed from "../../components/shared/BestPracticesFeed";
import MainHeading from "../../components/static/MainHeading";

const BestPracticePage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Best Practices in Cultural Heritage Management | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Best Practices emerging from the research conducted in the ReInHerit project."
      subText="Collection of best practices developed in the ReInHerit project (part of WP5)."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Best Practice", value:"/bestpractices"}
      ]}
    >Collection of best practices in Cultural Heritage Management</MainHeading>
    <BestPracticesFeed></BestPracticesFeed>
  </BaseLayout>
  )
}

export default BestPracticePage