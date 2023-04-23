import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"

const travellingCall = () => {

    return <BaseLayout>
    <MainHeading  
    breadCrumb={[
          {label:"Travelling Exhibitions", value:"/museumcalls/travelling"},
        ]}
        subText="Host a travelling exhibition in your museum."
        >
    </MainHeading>
    <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
      <h1>A modular Travelling Exhibition</h1>

<p>Have you ever considered making your museum's objects part of a European exhibition? Have you always wanted to take on a travelling exhibition that allows you to include your own local perspective and references? Are you thinking about innovative and affordable ways to exhibit digital representations of objects in your physical museum space? Are you intent upon offering an exhibition that specifically attracts a young audience?</p>
<p>The ReInHerit exhibitions are travelling exhibitions designed for small and medium-sized museums. They presently cover a small fraction of the Thematic Areas "Conflicts", "Craftsmanship" and "Identities", but have the potential to accommodate a large number of objects and perspectives. They provides a modular structure for the physical space and can accomodate an extended object selection from the ReInHerit digital collection. The ReInHerit exhibitions are analogue and digital at the same time. They are designed to be easily adaptable, extendable and interactive.</p>
<p>The Travelling Exhibitions aim to be shown in as many different places as possible. To this end, they are designed in such a way that they can also be taken over at smaller and medium-sized museums without major costs and changes. The exhibition designs are structurally conceived like a puzzle, which can be expanded with new puzzle elements that can be filled with their own narrative strands and objects. The objects will be shared digitally and the easy to implement exhibition architecture can be produced regionally and with locally available resources with the help of concrete instructions.</p>

<h3> How to host a Travelling Exhibition</h3>
<p>The exhibition concept consists of various puzzle components and aspires to be expanded. Therefore, the already provided content (audios, texts, digital objects) can be taken up and extended with new content and objects from the respective museum/cultural institution. The exhibition grows with each takeover.</p>
<p>In the exceptional case that an interested institution cannot add its own content or would like to show an existing puzzle element within a thematically matching exhibition, it can also be taken on without changes and can be shown without individual extension.</p>
 
<h4> Four steps to hosting your own exhibition:</h4>
<h5>1. DOWNLOAD INFORMATION</h5>
<ul>
<li>Thematic Areas</li>
<li>Exhibition Architecture</li>
<li>Content Implementation</li>
</ul>

<h5>2. CREATE A NARRATIVE</h5>
<ul>
<li>Select a topic</li>
<li>Choose objects</li>
<li>Find key objects</li>
</ul>
 
<h5>3. ORGANISE THE CONSTRUCTION</h5>
<ul>
<li>Check the dimensions of the exhibition space</li>
<li>Check what media are needed</li>
<li>Find local workshops and (reused) material</li>
<li>Install the structure and the devices</li>
</ul>
 
<h5>4. IMPLEMENT THE CONTENT</h5>
<ul>
<li>Download the „implementation instructions“</li>
</ul>
<a style={{borderRadius:0}} href="/images/tempBrochures/RIH-BRO-TRAV.pdf" download="museumcall_digital" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click here to see the instructions and download them as PDF</a>
</Container>
    </BaseLayout>
  
  }
  
  
  export default travellingCall;



