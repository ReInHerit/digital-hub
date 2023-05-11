import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const WeavingDoulappi = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Weaving ‘doulappi’ from Lefkara
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    The weaving ‘doulappi’ was a traditional wooden tool used in the past by the women of Cyprus for winding the threads, before using them for weaving in the ‘voufa’. It was usually combined with another simple wooden tool, called ‘anemi’, which was used to wrap the threads. By turning the ‘doulappi’, the thread was unwound by the ‘anemi’ and wound into a small piece of reed (known as a 'cannin'), which was applied to the ‘voufa’ and used for weaving. This particular ‘doulappi’ is made of white wood with a sycamore base. Its wheel, also known as a ‘fteroti’, consists of nailed boards with decoration on both sides. It is decorated with a diamond-shaped cross on one side and linear decoration on the reverse side.    
    </p>

<div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title=""
src=""
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ...  </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default WeavingDoulappi