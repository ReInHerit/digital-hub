import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import Forum from "../components/shared/Forum";
import GitterSiderCar from "../components/shared/GitterSideCar";
import QuickAccessBar from "../components/static/QuickAccessBar";

const Demo = () => {

  return (
    <BaseLayout>
      <h1>Demo / show case page for the digital hub</h1>
      <br></br>
      <br></br>
      <br></br>
      <Forum></Forum>

      <GitterSiderCar></GitterSiderCar>
      <QuickAccessBar></QuickAccessBar>
    </BaseLayout>
  )

}


export default Demo;