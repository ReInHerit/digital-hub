import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"
import ReinCardGrid from "../../components/shared/ReinCardGrid";
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard";
import Thumbnail from "../../components/shared/Thumbnail"

const HackathonPage = () => {

  return <BaseLayout
  pageTitle="ReInHerit Smart Tourism Hackathon | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Showcase of the ReInHerit Smart Tourism Hackathon, Nicosia, January 2024."
      breadCrumb={[
        {label:"Events", value:"/events"},
        {label:"Hackathon @Nicosia", value:"/reinherithackathon"}
      ]}
    >ReInHerit Smart Tourism Hackathon (Nicosia, January 2024)</MainHeading>
    <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
    <ReinCardGrid>
      <ReinGridCard
          url={`/hackathonnicosia/overview`}
          title={"Overview"}
          body={"Presenting the ReInHerit Smart Tourism Hackathon in Nicosia (January 2024) and its results."}
      >
        <Thumbnail src="/images/hackathonNicosia/thumbnail.png"></Thumbnail>
      </ReinGridCard>
      <ReinGridCard
          url={`/hackathonnicosia/projectOne`}
          title={"Nicosia Light Festival"}
          body={"First Prize Winner: Nicosia Light Festival, by Jannis Sidiropoulos"}
      >
        <Thumbnail src="/images/hackathonNicosia/firstprize.jpg"></Thumbnail>
        </ReinGridCard>
        <ReinGridCard
          url={`/hackathonnicosia/projectTwo`}
          title={"The ultimate Hub for Cyprus museums"}
          body={"Second Prize Winner: The ultimate Hub for Cyprus museums, by Maxim Grosul"}
      >
        <Thumbnail src="/images/hackathonNicosia/secondprize.jpg"></Thumbnail>
        </ReinGridCard>
        <ReinGridCard
          url={`/hackathonnicosia/projectThree`}
          title={"Augmented Reality"}
          body={"Third Prize Winner: Augmented Reality, by Kostas Tsagaridis"}
      >
        <Thumbnail src="/images/hackathonNicosia/thirdprize.jpg"></Thumbnail>
        </ReinGridCard>    
        <ReinGridCard
          url={`/hackathonnicosia/projectFour`}
          title={"The Archeological Odyssey"}
          body={"Special Award Winner from the European Cultural Tourism Council: The Archeological Odyssey, by Georgiou Athanasiadis and Daniil Georgiou"}
      >
        <Thumbnail src="/images/hackathonNicosia/ectnprize.jpg"></Thumbnail>
      </ReinGridCard>
    </ReinCardGrid>
    </Container>
  </BaseLayout>

}


export default HackathonPage;