import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import PerfNav from "../../components/static/firstPerfDocNav"
import MainHeading from "../../components/static/MainHeading"

const PerfAbout = () => {
  return (
    <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Performance at the Hadjigeorgakis Kornesios Mansion</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
        <p>
“ReInHerit In Performance: The Hadjigeorgakis Kornesios Mansion” was organised within the framework of ReInHerit H2020 on the evening of October 29th 2022. This immersive interdisciplinary experience combined a music performance by a small group of musicians from the Cyprus Symphony Orchestra, a large-scale interactive sound installation, video-art projections, dramatic lighting and a multi-sensory exhibition in the spaces of a unique monument of cultural heritage. The event was hosted at the Ethnological Museum of Cyprus in Nicosia, mostly known as the mansion of the Dragoman Hadjigeorgakis Kornesios, a high-ranking official in Ottoman Cyprus. </p>
<p>The entire event consisted of 3 consecutive performances with short breaks in between. Each performance had a rough duration of 40’. Interactive technology and gamification techniques were used to encourage visitors to actively engage with the space; this was a combination of a proximity-reactive audio installation, social media posts to increase pre-show engagement with the project and a treasure hunt-type mission – i.e. an envelope with a collection of written clues and exhibit descriptions - asking audience members to spot specific points of interest in the space, where sonic activity would take place. The event also hosted a multisensory exhibition specifically designed for visitors with visual impairment, which included 3D-printed replicas of some of the museum’s exhibits and a small-scale haptic sound  installation, consisting a line-art reduction of the Podocataro coat of arms (the bas relief decorating the museum’s entrance), that produced corresponding sounds when touched in certain spots, plus a booklet of the exhibition’s texts in braille. 
</p>
<p>The audience and performers navigated the performance space and triggered sonic events where they entered to explore, depending on locations of sound installation receivers. Thus, every visitor received an individualised experience of the cultural heritage space, shaped by their personal choices on where to go, what to focus on, who or what to interact with and for how long, within the space, during the performance. 
</p>
<p>The sounds used for each sound station of the installation (i.e. a receiver smartphone and a Bluetooth speaker) corresponded to specific exhibits in the mansion or to the surrounding space’s original use within the venue. A group of 9 musicians (violinists and violists) provided by the Cyprus Symphony Orchestra, added an element of live performance to the event. The musicians had fixed starting and ending points, with loosely set routes through the performance space. The sounds they created were produced following a set of verbal and notated instructions for guided improvisation. These sounds blended with the audio coming from the sound installation, parts of which were at times triggered by the musicians as they moved in the space, and created a fluctuating cloud of drones, short melodic motifs and noise loops that set the mood for each part of the performance.  
</p>
<p>Furthermore, visual elements were incorporated to ensure coherence between performance space and the sonic activity it hosted. These included dramatic coloured lighting and video projections. The lighting did not change throughout the performance as its function was to enhance specific spots within the performance space and to set the general mood during the event. On the other hand, the video projections used details of textures and patterns found in the venue, combined in an highly abstract collage that was slowly morphing and constantly moving for 40 minutes to set the pace of the performance. Thus, subtle changes on screen cued the musicians to move to different spots in the performance space and change the sounds they produced. 
</p>
<p>The performers did not interact with individual audience members, but instead set their courses through the space and gently prompted the audience to move around and explore the venue during the performance. The musicians started the performance scattered in the mansion’s courtyard, then they split into two groups that were dispersed in the garden and in the mansion’s rooms and finally converged at a terrace at the edge of the garden to cue the end of the event. Anonymous data was collected after the performance using online questionnaires to examine how audiences interact and experience museums or cultural heritage spaces, depending on the nature of the stimulus they receive. 
</p>
        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/tZ9VoZDAsro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
        </SideBarsLayout>
        </Container>
    </BaseLayout>
  )
}

export default PerfAbout
