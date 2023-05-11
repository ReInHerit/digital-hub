import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const AmboustaCase = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        ‘Ambousta’ (case) round silver case
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    A small round silver case, also known as an 'abusta', with a chain, which was used as a pendant in the 19th century. This particular jewel was used as a talisman, which can be seen from its decoration. In addition to the floral decoration with the central eight-petalled flower on the front, the reverse has an engraved six-pointed star, while the second chain ends in a hook with an engraved female figure. The use of both the six-pointed star and the human face was very common in folk art as symbols to ward off evil.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Round Abusta (case), silver and gilded"
src="https://sketchfab.com/models/b3d8306e972e4e16a18c75a475a1c8f4/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/round-abusta-case-silver-and-gilded-b3d8306e972e4e16a18c75a475a1c8f4?utm_medium=embed&utm_campaign=share-popup&utm_content=b3d8306e972e4e16a18c75a475a1c8f4" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Round "Abusta" (case), silver and gilded  
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default AmboustaCase