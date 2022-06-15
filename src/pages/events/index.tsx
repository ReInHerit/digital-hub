import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const EventsPage: React.FC = () => {
  return <BaseLayout>
    <MainHeading
      subHeading="Cultural heritage events organised by ReInHerit"
    >Events overview</MainHeading>
    <p>Here you'll find an overview of all cultural heritage related events provided via ReInHerit, like artistic performances.</p>

    <p>( Coming soon )</p>
  </BaseLayout>;
}

export default EventsPage;