import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import SummerSchoolFeed from "../../components/shared/SummerSchoolFeed";
import MainHeading from "../../components/static/MainHeading";

const SummerSchoolPage = () => {

  return <BaseLayout
  pageTitle="SummerSchool | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="ReInHerit XR&AI SummerSchool."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"SummerSchool", value:"/summerschool"}
      ]}
    >ReInHerit SummerSchool</MainHeading>
    <SummerSchoolFeed></SummerSchoolFeed>
  </BaseLayout>

}


export default SummerSchoolPage;