import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const ThroneChair = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Throne chair 
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    This type of folding carved wooden chairs has a long history, which dates back to ancient Egypt, where they were used as folding stools. This particular form was reused as a folding chair for everyday use in medieval Italy and spread throughout Europe during the Renaissance. This particular type of chair, which is an attempt to revive the ancient Egyptian type during the Renaissance period, is known by the name Savonarola, which derives from a similar type of chair found in the monastery of San Marco in Florence, which was used by Italian priest Girolamo Savonarola in the 15th century. Instead of four legs, this type of chair consists of a series of narrow wooden curves joined in the centre. In this particular chair, the back is decorated with two elaborately carved wood peacocks. Because of the elaborate decoration, these chairs were also called throne chairs. In most cases, they were designed to fold up for easy transport when additional chairs were needed for a special event.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Traditional Throne"
src="https://sketchfab.com/models/b03fcfc4fe234ebda9949c292adc22db/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/traditional-throne-b03fcfc4fe234ebda9949c292adc22db?utm_medium=embed&utm_campaign=share-popup&utm_content=b03fcfc4fe234ebda9949c292adc22db" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Traditional Throne 
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default ThroneChair