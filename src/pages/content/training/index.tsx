import React from "react";
import TrainingFeed from "../../../components/shared/TrainingFeed";
import BaseLayout from "../../../components/static/BaseLayout";


const TrainingPage = () => {

  return (
    <BaseLayout>
      <h1 className="h2">Training</h1>
      <br /> 
      <TrainingFeed></TrainingFeed> 
    </BaseLayout>
  )

}

export default TrainingPage;