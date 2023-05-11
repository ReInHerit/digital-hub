import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const WoodenChest = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Wooden Chest
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    Chests of this type (known as ‘sendoutzia’) were one of the most common pieces of furniture found in both urban and rural homes and were used to store textiles and other items that were woven on looms to form the bride's dowry for her wedding and her new home. These chests usually had on their front, sometimes on both sides, wonderful carved decorations, which reflected the wealth and nobility of the owner. They were made by folk craftsmen usually with pine wood, but wood from other trees, such as cypress, was also used, with walnut being used less often, in more luxurious chests. This particular chest is decorated with motifs of plant decoration, which are characteristic of Cypriot folk art. A vase of five flowers with cypress trees on the right and left is depicted  in its centre, which are repeated on both ends, together with large rosettes. 
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Sendoutzi (chest) from maroon wood"
src="https://sketchfab.com/models/8743637f963641f1a8e2d0e589293906/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/sendoutzi-chest-from-maroon-wood-8743637f963641f1a8e2d0e589293906?utm_medium=embed&utm_campaign=share-popup&utm_content=8743637f963641f1a8e2d0e589293906" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>"Sendoutzi" (chest) from maroon wood</a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default WoodenChest