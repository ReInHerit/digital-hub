import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import SummerSchoolFeed from "../../components/shared/SummerSchoolFeed";
import MainHeading from "../../components/static/MainHeading";

const SummerSchoolPage = () => {

  return <BaseLayout
  pageTitle="XR&AI Summer School | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Summer School held in Matera in July 2023."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Summer School", value:"/summerschool"}
      ]}
    >XR/AI Summer School (Matera 2023)</MainHeading>
    <SummerSchoolFeed></SummerSchoolFeed>
  </BaseLayout>

}


export default SummerSchoolPage;