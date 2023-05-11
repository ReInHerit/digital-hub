import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const CarvedChair = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Carved wooden church chair
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    This particular chair belongs to a special group of handmade seats with carved wood decoration. This type of carved chairs was not common in traditional Cypriot houses but rather rare. Indicative of their rarity is the fact that the carved chairs used by the newlyweds on their wedding day, in many villages, were usually given as a loan by the church or the community. This particular chair has decoration all over the back and front legs, which is dominated by criss-crossed lines along with incised circles. It also features an embossed cross within a circle on the upper back. The back is also decorated with four "pillars" which resemble the ‘parmakia’, a characteristic of the windows of folk architecture.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Carved wooden church chair"
src="https://sketchfab.com/models/c7276b2758394b6cabe44161269f59e6/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/carved-wooden-church-chair-c7276b2758394b6cabe44161269f59e6?utm_medium=embed&utm_campaign=share-popup&utm_content=c7276b2758394b6cabe44161269f59e6" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Carved wooden church chair  
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

    </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default CarvedChair