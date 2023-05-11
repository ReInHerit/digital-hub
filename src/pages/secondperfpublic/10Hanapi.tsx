import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const Hanapi = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        “Hanapi”, container from hammered silver leaf
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    This particular vessel is called "hanapi" (the word comes from the medieval French word hanap). Hanapia were hemispherical containers for personal use which usually had a particularly elaborate decoration. This particular one is made of hammered silver leaf and on the inside has a representation of a falcon with open wings holding the inscription ΙΕΡΑΞ ΕΜΟΝ ΟΝΟΜΑ. On the reverse side there is the inscription ΚΤΗΜΑ Χ’’: ΜΧΛ ΖΓ ΡΦ ΜΡ ΑΘ’ ΩΣ, which states that the hanapi of 1801 was a vessel for the personal use of Hatzimichail Zografou Myriantheos, who was a well-known icon painter of Cyprus, who created many icons throughout Cyprus.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Hanapi from hammered silver leaf"
src="https://sketchfab.com/models/776abdb3e99247f9a315770b30ad0a7a/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/hanapi-from-hammered-silver-leaf-776abdb3e99247f9a315770b30ad0a7a?utm_medium=embed&utm_campaign=share-popup&utm_content=776abdb3e99247f9a315770b30ad0a7a" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    "Hanapi" from hammered silver leaf  
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>

        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default Hanapi