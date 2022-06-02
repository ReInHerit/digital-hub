import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import Forum from "../components/shared/Forum";
import GitterSiderCar from "../components/shared/GitterSideCar";
import EventForm from "../components/static/EventForm";

const Demo = () => {

  return (
    <BaseLayout>
      <h1>Demo / show case page for the digital hub</h1>
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