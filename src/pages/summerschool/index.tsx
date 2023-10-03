import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import SummerSchoolFeed from "../../components/shared/SummerSchoolFeed";
import MainHeading from "../../components/static/MainHeading";

const SummerSchoolPage = () => {

  return <BaseLayout
  pageTitle="Hackathon @ XR&AI Summer School | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Showcase of the ReInHerit Hackathon during the XR&AI Summer School in Matera in July 2023."
      breadCrumb={[
        {label:"Events", value:"/events"},
        {label:"Hackathon @Matera", value:"/summerschoolhackathon"}
      ]}
    >ReInHerit Hackathon (Matera, July 2023)</MainHeading>
    <SummerSchoolFeed></SummerSchoolFeed>
  </BaseLayout>

}


export default SummerSchoolPage;