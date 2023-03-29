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
        Description of treasure hunt and museological approach for Immersive Performance by Maria Shehade</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<PerfNav />}>
    <p>
    One of the main ideas behind the immersive performance was that the Hadjigeorgakis Kornesios mansion would not constitute just a performance site simply hosting the event, but that the performance would merge with the place and constitute an enhancement of the visitor experience. The aim was to provide to the visitors a different way of experiencing and getting to know a heritage site, that goes beyond the typical museum visit, which is usually centred around textual ways of interpretation. Thus, the aim was to create additional layers of experience that can trigger the senses, providing a combination of visual, haptic, textual and auditory cues. This multisensory endeavour would allow each visitor to experience the heritage site in his own personal way and create his own meaning based on his personal interest. 
    </p>
    <p>
    In order to allow this, the experience (both from a museological and from a performative aspect) was not designed to be linear, following a particular script, but visitors could walk freely within the mansion, deciding where to spend more time as they wished and according to their interests. To achieve this non-linear experience that would also allow an interpretation to be provided, a treasure hunt was designed around particular objects of interest that are found in different areas of the mansion.  In total, 15 objects were selected from the mansion, located both inside the rooms of the mansion and in the internal courtyard, including, a fountain, a traditional dress, a grandfather clock, a decorated chest, a tea set, pottery and jewellery amongst others. 
    </p>
    <p>
    For each of the selected objects, short texts were prepared. The texts, written in simple language and avoiding academic jargon so that they were easily read by younger audiences as well, provided basic information regarding each object and its use in the daily life of the mansion. The texts were designed in such a way so as to briefly provide a general historical context for each object, since many of the objects originated from different historical periods, and also emphasised the use of these objects or stories of the inhabitants of the mansion that related to these objects. The aim of the texts, apart from providing a basic way of interpretation, was to facilitate the visitors to relate to the people that inhabited the mansion and imagine their daily life in the specific environment. 
    </p>
    <p>
    The texts did not include any information on where in the mansion each object was located. They were printed on small pieces of the paper and were handed out to the audience in an envelope at the entrance of the site. This treasure hunt-type of activity was asking the visitors to spot these objects in the mansion. Each object included in the treasure hunt was linked to a sonic activity so once visitors approached an object, they would start to receive extra auditory cues.  
    </p>
    <p>
    <a style={{borderRadius:0}} href="/pdfs/TreasureHuntCards.pdf" download="TreasureHunt" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the treasure hunt cards (in Greek).</a>
    </p>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default TreasureHunt