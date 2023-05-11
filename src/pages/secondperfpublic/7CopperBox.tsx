import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const CopperBox = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Copper alloy box, rectangular with embossed and carved patterns
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    This box is made of copper alloy and was probably used as a gunpowder case in the 19th century. It is decorated with incised geometric and floral designs on all sides and features a custom cap on the top side. On the underside it has three fixed rings, for attaching other hanging elements.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Copper box with floral designs"
src="https://sketchfab.com/models/50d0f19a43284848bffb21b8cdb302b9/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/copper-box-with-floral-designs-50d0f19a43284848bffb21b8cdb302b9?utm_medium=embed&utm_campaign=share-popup&utm_content=50d0f19a43284848bffb21b8cdb302b9" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Copper box with floral designs   
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

          </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default CopperBox