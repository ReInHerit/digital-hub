
import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const PerformancesOverviewPage = () => {

  return <BaseLayout>
    <MainHeading 
      subHeading="Performances developed and carried out in the course of the ReInHerit project."
      breadCrumb={[
        {label:"Performances", value:"/performances"}
      ]}
      >Performances overview</MainHeading>
    <p>Here you'll find material related to the artistic performances.</p>
    <p>(Coming soon...)</p>
  </BaseLayout>

}

export default PerformancesOverviewPage;