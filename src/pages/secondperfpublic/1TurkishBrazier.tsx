import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const TurkishBrazier = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Turkish brazier, Constantinople type
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>This object was used as a brazier and consists of 3 parts, a base, an inner container and a lid. The base rests on 6 feet with decoration all around. On top there is a free-standing copper container, in which the fuel was placed, with two cast bronze handles for easy removal. The brazier was sealed with a domed copper lid, on the top of which there is a bronze star with the crescent moon. The star served both as a handle for the lid and as a decorative element that indicated the Turkish origin of the brazier. Similar types of braziers are available with several variations in their decoration, indicative of the importance given to this object by craftsmen in their effort to satisfy their wealthy customers. Copper braziers of this type were used in urban houses in Cyprus as a necessary item-furniture during the period of Ottoman rule.</p>

<div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Turkish Mangali brazier" 
src="https://sketchfab.com/models/1cf4331fce464d65b55065e1b2f0920b/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/turkish-mangali-brazier-1cf4331fce464d65b55065e1b2f0920b?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> Turkish Mangali brazier </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default TurkishBrazier