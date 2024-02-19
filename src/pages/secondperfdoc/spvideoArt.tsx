import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavDoc from "../../components/static/secondPerfDocNav"
import { Container } from "react-bootstrap"


const spVideoArt = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
      >
        <MainHeading subHeading="ReInHerit a Museum - Documentation">
        Video Art</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavDoc />}>
        <p><b>The Visual Part</b></p>
<p>The visual component of the performance combined exhibits from the BoCCF with generative art and video art, resulting in a hybrid artwork. Historical artifacts and algorithms merged to create a unique audiovisual landscape that stimulated new interpretations, multiple perspectives, and a dynamic dialogue about the past, the present, and the future of the corresponding exhibits.</p>
<p>In the subsequent phase, 8 area scans were generated, each corresponding to the location of a specific object, strategically positioned across various locations within the museum to encourage visitors to browse through and explore the building and its collections during the event. The audience scanned the objects in the corresponding area, and consequently, the three-dimensional model appeared on a tablet or their mobile devices along with object descriptions and historical information about the original exhibit.</p>
<p>Following this stage, these conserved reference points embarked on a gradual orbit around the central axis of each object within the dimensions of x, y, and z. The traces of these movements were captured and presented in real time to spectators via the projection. This intricate procedure culminated in a visual effect reminiscent of the stroke of a brush as it gracefully glides across canvas or paper, thus achieving a uniquely creative and abstract visual outcome. This culmination stands as a testament to the museum’s very essence and mission.</p>
<p><b>Technical Characteristics of the Real-Time Visuals</b></p>
<p>The visual aspect encompasses algorithmic graphics and the aesthetics of video art. Initially, three-dimensional models of exhibits were created using photogrammetry, and architectural elements were retained in the node-based software, Touch Designer (https://derivative.ca/). Additionally, Artificial Intelligence-generated images of dancers were created using e-Dally (https://openai.com/dall-e-2) and integrated into a timeline, allowing for smooth transitions and intermediate states. These elements were integrated into a system created in Touch Designer, where audience input and MIDI controller inter- actions shaped the final artwork.</p>
<p><b>The Video-Art</b></p>
<p>The video art was created using AI-generated images of dancers. These images were then imported into a video editing program, and utilizing the technique of morphing, intermediate images were generated. This process gave rise to the movement and, consequently, the video. The final form of the moving images resulted from a combination of the created video by the dancers and real-time graphics through projection mapping.</p>
<p><b>Projection Mapping</b></p>
<p>Projection mapping played a crucial role in the immersive experience. The exterior side of the venues’ building and an amphitheater in the courtyard were utilized for it. By selecting two opposing points in the courtyard, the audience was fully immersed in visuals and music, creating a sense of unity. Three programs worked simultaneously in real-time: Touch Designer generated the graphics, Syphon (https://syphon.github.io/) trans- ported them to Mad Mapper (https://madmapper.com/), which facilitated the mapping onto the building’s surface.</p>
<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4gninGRoY9A?si=aEANORbEEcyl-Iqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default spVideoArt
