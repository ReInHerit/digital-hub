import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const VaseKannourka = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Vase with “kannourka”, red clay pottery
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    This vase is representative of rural pottery centres, such as Phoini, where female potters made such vases on the wheel ("gyristari"). The vase is made of red clay and is hand-carved with decoration of flowers and birds. The decorative elements are attached to the main body of the vase, with cylindrical stems called "kannourka", on which birds and flowers can be seen alternately. The vase is particularly elaborate as it consists of 2 vases, with the smaller one at the top, at the mouth of which there are 2 birds facing each other. The vase is engraved with the inscription PHINI CYPRUS SOFRONIA in English (that is the name of the manufacturing village and of the potter), since it was intended for the tourist market of the time.    
    </p>

<div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Vase with kannourka, red ceramic pot"
src="https://sketchfab.com/models/698e358b74f341c9b6dd65bcf068f2d5/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/vase-with-kannourka-red-ceramic-pot-698e358b74f341c9b6dd65bcf068f2d5?utm_medium=embed&utm_campaign=share-popup&utm_content=698e358b74f341c9b6dd65bcf068f2d5" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> Vase with "kannourka", red ceramic pot  </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default VaseKannourka