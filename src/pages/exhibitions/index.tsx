import React from "react";
import { Button } from "react-bootstrap";
import ExhibitionCollection from "../../components/shared/ExhibitionCollection";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const ExhibitionOverviewPage = () => {

  return <BaseLayout>
    <MainHeading
      subHeading="Exhibitions and related material provided by ReInHerit"
    >Exhibitions</MainHeading>
    <p>Here you'll find exhibitions, which will be developed and carried out in the ReInHerit project.</p>
    <ExhibitionCollection></ExhibitionCollection>
  </BaseLayout>

}

export default ExhibitionOverviewPage;