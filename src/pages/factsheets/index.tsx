import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import FactsheetsFeed from "../../components/shared/FactsheetsFeed";
import MainHeading from "../../components/static/MainHeading";

const FactsheetsPage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Factsheets for Cultural Heritage Management | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Factsheets emerging from the primary and secondary research conducted in the ReInHerit project."
      subText="The primary and secondary research conducted in WP2 informed all the subsequent work and development within the ReInHerit project. Here you will find key take-aways."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Factsheets", value:"/factsheets"}
      ]}
    >Factsheets for Cultural Heritage Management</MainHeading>
    <FactsheetsFeed></FactsheetsFeed>
  </BaseLayout>
  )
}

export default FactsheetsPage