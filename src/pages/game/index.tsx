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
          {label:"Videogame", value:"/game"}
        ]}        
      >ReInHerit Videogame</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
     
<h2>The ReInHerit Videogame</h2>
<p></p>
<iframe mozallowfullscreen="true" allow="autoplay; fullscreen" src="https://veupnea.github.io/ReInheritVideoGame/index.html" style="border:0px #000000 none;" name="ReInHerit Video Game" scrolling="no" msallowfullscreen="true" allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="0" marginheight="px" marginwidth="320px" height="540px" width="960px"></iframe>
<p></p>
        </Container>
    </BaseLayout>
  )
}

export default Videogame
