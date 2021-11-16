import React from "react";
import NetlifyEmbed from "../../../components/shared/NetlifyEmbed";
import TrainingFeed from "../../../components/shared/TrainingFeed";
import BaseLayout from "../../../components/static/BaseLayout";


const TrainingPage = () => {

  return (
    <BaseLayout>
      <h1>Training material </h1> 
      <TrainingFeed></TrainingFeed> 
    </BaseLayout>
  )

}

export default TrainingPage;