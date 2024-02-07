import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavDoc from "../../components/static/secondPerfDocNav"
import { Container } from "react-bootstrap"


const spMuseologicalPerspective = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
      >
        <MainHeading subHeading="ReInHerit a Museum - Documentation">
        Museological Perspectives</MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavDoc />}>
        <p>From a museological point of view, the main idea behind the performance, followed that of the previous immersive performance organized under ReInHerit: the museum and the premises of the BoCCF would not constitute just a performance site simply hosting the event, but that the performance would merge with the museum and constitute an enhancement of the visitor experience. Thus, the aim was to provide to the visitors a different way of experiencing and getting to know the actual museum, a way that goes beyond the typical museum visit, which is usually centred around textual ways of interpretation. Therefore, we aimed to create additional layers of experience that can trigger the senses. This endeavour would allow each visitor to experience the museum in their own personal way and create their own meaning based on their personal interests.</p>  
        <p>The BoCCF has a large and very rich ethnographic collection, which is not accessible to the public. Therefore, it was decided that the AR application that would be designed for the performance could be used to bring these objects to the public and create a "virtual" exhibition, presented alongside the Museum of George and Nefeli Giabra Pierides Collection and the temporary exhibitions of the BoCCF. </p>
        <p>Artefacts from the ethnographic collection of the BoCCF were selected and 3D scanned, and were available through the AR application, such as a traditional vase, a brazier, a throne, a wooden chest, a gilded buckle, and a talisman, amongst others. The exhibits of this "virtual" exhibition were scattered around the premises of the building and became visible based on the audiences’ interactions. The virtual exhibition consisted of 12 objects of folk art from the Pierides ethnographic collection, mainly from the 19th century, which were used in the daily life of that time, such as examples of silversmithing, woodcarving, ceramics and metalwork. Through this virtual exhibition, a “dialogue” was created with the artefacts currently on display from the archaeological collection and the other temporary exhibitions. </p>
        <p>Through the application, visitors could see these objects and also interact with them, by turning them around to see all sides of the objects and also zoom into details that were described in the accompanying texts. For each object, an accompanying text was available through the application, which provided the context of the object and described its use in the daily life of the people in the 19th century. The texts were written in a simple language, avoiding academic jargon so that they can be easily read by younger audiences as well. The texts were the result of thorough research for each of the selected objects, and, apart from providing a basic way of interpretation, they also aimed to help visitors to imagine the daily life in Cyprus in the 19th century.</p>
        <p>The interpretation material created was standalone for each object, so that visitors could have a full experience even if they did not see all objects and irrespective of the order in which they saw the objects and texts. Thus, the experience was not designed to be linear, but visitors could walk freely within the space, deciding where to spend more time as they wished and according to their interest. </p>
        <p>In order to create this experience, the selected objects had to be scanned for the AR application. However, some objects could not be scanned properly due to the nature of their material (e.g., glass or other reflective surfaces). Therefore, some objects initially selected could not be included or had to be replaced by other objects that did not have such problems. Thus, the narrative was affected by technological aspects relating to the scanning process. Also, since these objects are not currently displayed to the public, for some of them there was no available information, and so a lot of research had to be done to trace their origins and related context. These were some of the main challenges faced during the development process.</p>
    
     </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default spMuseologicalPerspective














