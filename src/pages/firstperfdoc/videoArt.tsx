import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import PerfNav from "../../components/static/firstPerfDocNav"
import { Accordion, Container } from "react-bootstrap"


const VideoArt = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Notes on video art created for ReInHerit in Performance: The Hadjigeorgakis Kornesios Mansion, by visual artist Stefanos Papadas
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
<p>During the performances, two main videos were created. A first longer video (40-minutes) was projected throughout the performance on wall of adjacent building facing the courtyard of the mansion:</p>
<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/18jbT-o2w_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
<p>A shorter video (6-minutes loop) was projected in a small room at the ground floor of the mansion – storage space / old servants’ quarters:</p>
<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/HOWvMGHneic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
<p>The following section describes the creation process of this video art:</p>
      <ul>
          <li>Step 1 - Video Concept</li>
            <p>Since the purpose of the project was to give new "life" to the museum, the video through projection mapping was designed to represent H.K. Mansion’s “breath” in a symbolic and abstract way. The different rooms and spaces were identified with the vital organs of a living organism. In this way, the viewer had a visual stimulus that completed his/her immersive experience.</p>
            <p>At first, it was needed to create an extensive visual collection of the museum’s data. We organized a professional photographic recording to be done on two separate days and we collected the following data:</p>
          <ul>
            <li>Architecture (external and internal space)</li>
            <li>Perspectives and Details</li>
            <li>Vegetation/Nature in relation to the museum</li>
            <li>Objects</li>
            <li>Relationship between light and building (external and internal)</li>
            <li>Materials</li>
            <li>Textures</li>
            <li>Patterns</li>
            <li>Combined images of the above</li>
          </ul>
          <p></p>
          <li>Step 2 - Study/Image Selection</li>
          <p>At this stage, all the photographic material was studied. The most interesting images were distinguished and placed in separate folders.</p>
          <li>Step 3 - Visual Narration - Visual Structure</li>
            <p>Beginning - Middle - End: 10 chapters as 10 different parts-locations-rooms of the building</p>
          <li>Step 4 - Cut out interesting elements</li><p></p>
          <li>Step 5 - Material experimentation and animation</li><p></p>
          <li>Step 6 - Creation of 10 different visual & moving chapters</li><p></p>
          <li>Step 7 - Video Editing/Rhythm</li><p></p>
          <li>Step 8 - Color Grade and Color correction</li><p></p>
          <li>Step 9 - Final export</li><p></p>
          <li>Step 10 - Projection Mapping</li>
        </ul>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default VideoArt
