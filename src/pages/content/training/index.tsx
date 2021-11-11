import React from "react";
import NetlifyEmbed from "../../../components/shared/NetlifyEmbed";
import TrainingFeed from "../../../components/shared/TrainingFeed";
import BaseLayout from "../../../components/static/BaseLayout";


const TrainingPage = () => {

  return (
    <BaseLayout>
      <h1>Training material </h1> 
      <NetlifyEmbed htmlLoc="/admin/admin.html#/" style={{width:"100%", height:"100vh", border:"2px solid lightgrey"}}/>
      <TrainingFeed></TrainingFeed> 
    </BaseLayout>
  )

}

export default TrainingPage;