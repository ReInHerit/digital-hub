import React from "react"
import { Container } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Videogame = () => {
  return (
    <BaseLayout
    pageTitle="Videogame | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Play and discover how museum works"
        breadCrumb={[
          {label:"Discover", value:"/visitorhub"},
          {label:"videogame", value:"/game"}
        ]}        
      >ReInHerit Videogame</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
     
<h2>The ReInHerit Videogame</h2>
<p></p>
<iframe></iframe>
<p></p>
        </Container>
    </BaseLayout>
  )
}

export default Videogame
