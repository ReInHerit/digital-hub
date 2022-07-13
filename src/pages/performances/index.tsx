
import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const PerformancesOverviewPage = () => {

  return <BaseLayout>
    <MainHeading 
      subHeading="Performances developed and carried out in the course of the ReInHerit project."
      subText="Here you'll find material related to the artistic performances. (Coming soon...)"
      breadCrumb={[
        {label:"Performances", value:"/performances"}
      ]}
      >Performances overview</MainHeading>
  </BaseLayout>

}

export default PerformancesOverviewPage;