import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const GildedBuckle = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Gilded buckle 
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    Gilded buckle (or "poukla" as it is called in Cypriot sources), consisting of three pieces of silver leaf. This particular piece of jewellery was used to close the belt around the waist. It is decorated with large rosettes and other smaller floral designs such as leaves, flowers and stems. This is the work of a local silversmith, and behind each piece there are plates for fastening to the belt.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Gilded buckle"
src="https://sketchfab.com/models/5979bc69c117494aab69d2743b9066b4/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/gilded-buckle-5979bc69c117494aab69d2743b9066b4?utm_medium=embed&utm_campaign=share-popup&utm_content=5979bc69c117494aab69d2743b9066b4" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Gilded buckle  
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default GildedBuckle