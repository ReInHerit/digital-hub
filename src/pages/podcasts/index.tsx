import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import PodcastFeed from "../../components/shared/PodcastFeed";
import MainHeading from "../../components/static/MainHeading";
import { Container, Row, Col, Image } from "react-bootstrap"

const PodcastPage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Museum Up Podcast | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Museums Up is a podcast series within ReInHerit."
      subText="These series of Podcasts are hosted by Jaime López of Arte Sostenible. New episodes every two weeks!"
      breadCrumb={[
        {label:"Content", value:"/content"},
        {label:"Podcast", value:"/Podcast"}
      ]}
    >Museum Up Podcast</MainHeading>
  <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
  <Row>
    <Col>
    <Image src="https://ucarecdn.com/5212b376-c5df-4908-aa73-2f74be7ab0df/" className="fluid ps-3" width={"80%"}></Image>
    </Col>
    <Col sm={8}>
    <h5 className="mt-5">Museums Up is a smart tool that gives you the opportunity to explore in a direct and informal way issues 
    concerning museums and cultural heritage management through professionals.</h5>
    <p></p>
    <h5>You can listen to the podcasts on different platforms: <a href="https://podcasts.apple.com/us/podcast/museums-up/id1655844860">Apple Podcasts</a>, <a href="https://open.spotify.com/show/5487m5ffaqaMgWyi0yn2Kv">Spotify</a>, <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL211c2V1bXN1cC1yZWluaGVyaXQvZmVlZC54bWw">Google Podcasts</a>, and <a href="https://music.amazon.com/podcasts/6a55e01b-59fa-433a-a30c-7eede94f5097/museums-up">Amazon Music</a>.</h5>
    </Col>
  </Row>
  </Container>
    <PodcastFeed></PodcastFeed>
  </BaseLayout>
  )
}

export default PodcastPage