import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import Forum from "../components/shared/Forum";
import GitterSiderCar from "../components/shared/GitterSideCar";

const Demo = () => {

  return (
    <BaseLayout>
      <h1>Test page for forthcoming content on the digital hub</h1>
      <br></br>
      <br></br>
      <br></br>
      <Forum></Forum>
      <GitterSiderCar></GitterSiderCar>
      <EventForm></EventForm>
    </BaseLayout>
  )

}


export default Demo;