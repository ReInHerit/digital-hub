import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"

const digitalCall = () => {

    return <BaseLayout>
     <MainHeading  
    breadCrumb={[
          {label:"Participate", value:"/networkinghub"},
          {label:"Digital Collection", value:"/museumcalls/digital"},
        ]}
        subText="Contribute to the ReInHerit digital collection."
        >
    </MainHeading>
    <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
      <h1>Call for Contributions to the digital collection</h1>
<p>Your institution is invited to become part of a <b>Europe-wide cultural heritage network</b>. Be part of the <b><a href="https://collection.reinherit-hub.eu/">ever-growing ReInHerit Collection</a></b>, which illustrates three current topics. Your contribution of a digital collection object will make this growing diversity richer and will help to form a multifaceted perspective on the topics at hand.</p>
<p>The <b>EU Horizon2020 project ReInHerit</b> deals with possible transformations taking place within the cultural heritage sector, aiming to break new ground in its management structures. Together with our project partners, we created the foundation for a network of cultural heritage professionals and built a freely accessible platform for digital exchange, presentation and experimentation (Digital Hub) based on intensive research.</p>
<p>By uploading your digital collection object, you can <b>share and add a new perspective</b> to the three topics:
<p></p>
<ul>
<li>ReThinking <b>Conflicts</b></li>
<li>ReThinking <b>Identities</b></li>
<li>ReThinking <b>Craftsmanship</b>.</li>
</ul></p>
<p>The ReInHerit partner museums “Graz Museum”, “Museum of Cycladic Art” and”Bank of Cyprus Cultural Foundation” elaborated the base of the three Thematic Areas and developed three Travelling Exhibitions, three Digital Exhibitions and the Digital Collection. These will go live from February 2023 on.</p>
<p>As our contributions only show and represent one perspective on the topics, we invite institutions all over Europe to contribute their digital collection objects (3D and 2D) to achieve a broader and more heterogeneous representation of the respective Thematic Areas. A core benefit of sharing your digital objects lies in the opportunity for other institutions to use them in their exhibitions. This open exchange of digital objects enables museums around Europe to incorporate expanded perspectives into their future exhibition narratives, thereby giving room to more diverse voices.</p>
<p><b>Together we create a European Collection to illustrate the rich diversity in the portfolio of the cultural sector and show the variety of perspectives on the respective topics.</b></p>
<p></p>
<h5>How to contribute?</h5>
<p>Simply submit one or several of your collection objects and information on the objects <a href="https://docs.google.com/forms/d/1thxGJsVMk2a6OjyPLNSAm-5RfAGdnkM7-KjmA6nWeIw/prefill">via this form</a>. We will integrate your contributions into the ReInHerit Digital Collection, which will add your institution to the ReInHerit network.</p>
<h5>Do you have questions?</h5>
<p>Please feel free to contact us via e-mail: reinherit@stadt.graz.at </p>
<p></p>
<p>Thank you for your interest in the ReInHerit project. Your submission is a valuable contribution to a growing collection of digital Cultural Heritage objects.</p>
<p></p>
    <a style={{borderRadius:0}} href="/images/tempBrochures/RIH-BRO-DIGITAL.pdf" download="museumcall_digital" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click here to download a brochure with more information.</a>
    <p></p>
    <a style={{borderRadius:0}} href="/images/tempBrochures/RIH-BRO-DIGITAL-es.pdf" download="museumcall_digital_es" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click here to download the Spanish version of the brocure.</a>
    </Container>
    </BaseLayout>
  
  }
  
  
  export default digitalCall;