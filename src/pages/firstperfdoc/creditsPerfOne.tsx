import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import PerfNav from "../../components/static/firstPerfDocNav"
import { Container } from "react-bootstrap"


const TreasureHunt = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Credits</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
    <p>“ReInHerit in Performance: The Hadjigeorgakis Kornesios Mansion”, organized within the framework of ReInHerit by CYENS Centre of Excellence, was completed with great success on Saturday October 29th 2022, at the Mansion of Hadjigeorgakis Kornesios in Nicosia, Cyprus, attracting visitors of all ages.</p>
    <p>The immersive performance combined a music performance by a small group of musicians from the Cyprus Symphony Orchestra, a large-scale interactive sound installation, video art projections, dramatic lighting and a multisensory exhibition in the spaces of a unique monument of cultural heritage. The performance proposed an innovative approach to the curation of the visitors’ experience within cultural heritage sites, for which CYENS CoE created an immersive experience within a museum.</p>
    <p>During the performance, the audience and performers were invited to navigate the spaces of the museum freely and trigger sonic events wherever and whenever they entered to explore, depending on the placement of the sound installation’s digital sensors. Thus, every visitor received an individualised experience of the cultural heritage space, shaped by their personal choices on where to move to, what to focus on and for how long during the performance.</p>
    <p>ReInHerit funding was secured in the framework of the Horizon 2020 CSA Programme, on the theme Culture beyond borders – Facilitating innovation and research cooperation between European museums and heritage. The Programme proposes an innovative model of sustainable cultural heritage management, aspiring to disrupt the current status quo of communication, collaboration and innovation exchange between museums and cultural heritage sites.</p>
    <ul>
        <li>Performance direction and music composition: Andreas Papapetrou</li>
        <li>Project Coordinator and ITICA MRG Leader: Kleanthis Neokleous</li>
        <li>Programming: Fotos Frangoudes, Alexios Polydorou, Giorgos Hadjiantonis</li>
        <li>Video Art: Stefanos Papadas</li>
        <li>Lighting design: Demetris Shammas</li>
        <li>Graphic design: Maria Loizou</li>
        <li>Linear drawing: Avgi Papapetrou</li>
        <li>3D design: Alexis Baldwin</li>
        <li>Exhibition technician: Marios Charalambous</li>
        <li>Writer and editor: Maria Shehade</li>
        <li>Communication Officer: Chrystalla Charalambous-Papadopoulou</li>
        <li>Performers: Konstantinos Anastasiades, Christian Bishara, George Georgiou, Hasmik Sargsyan, Ayse Karaoglan, Varvara Merzlova, Kumiko Okutomi, Tefkros Xydas </li>
</ul>
<p>Thanks to the Cyprus Department of Antiquities for providing the space, and especially to Marina Solomidou-Ieronymidou, Giorgos Georgiou and Evi Fiouri. Thanks to the Saint Barnabas School for the Blind, the Orphanos traditional costume shop and Energie boutique.</p>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default TreasureHunt














