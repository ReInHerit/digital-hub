import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import SecondPerfNavPublic from "../../components/static/secondPerfPublicNav"
import { Container } from "react-bootstrap"


const ClayVase = () => {
    return (
      <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation"
      >
        <MainHeading subHeading="The second ReInHerit performance">
        Clay vase 
        </MainHeading>
        <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
        <SideBarsLayout left={<SecondPerfNavPublic />}>
    <p>
    Clay vase with a high neck and wide opening. The vessel also had a vertical handle which is not preserved. Its decoration includes subjects related to marine life in black on a ceramic surface. Both the shape and the decoration are an imitation of a well-known vase of the Minoan era (15th century BC), which is known as the "Marseille vase" and is one of the most impressive examples of maritime style from the Minoan era. The vase was made in the "Leon" pottery workshop founded by Yiannis Iliadis in Kyrenia. Such imitations of vase records did not faithfully follow either the shape or the decoration of the ancient vases, since the potter was merely inspired by them but did not copy them. The vase is stamped on the base with the lion emblem and the words LION, CYPRUS and POTTERY.
    </p>

    <div className="mb-5" style={{maxWidth:"1300px", margin: "auto"}}> 
<div className="mt-5" style={{textAlign: "center", maxWidth: "100%", width: "100%", height: "800px"}}> 
<iframe title="Clay vase"
src="https://sketchfab.com/models/9c81967112a448adb11fef59aa90047a/embed"
width="100%" height="100%" > 
</iframe>
<p style={{fontSize: "13px", fontWeight: "normal", margin:"5px", color: "#4A4A4A"}}> 
    <a href="https://sketchfab.com/3d-models/clay-vase-9c81967112a448adb11fef59aa90047a?utm_medium=embed&utm_campaign=share-popup&utm_content=9c81967112a448adb11fef59aa90047a" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>
    Clay vase  
    </a> by <a href="https://sketchfab.com/itica_mrg?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}> ITICA MRG @ CYENS - Centre of Excellence </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1cf4331fce464d65b55065e1b2f0920b" target="_blank" rel="nofollow" style={{fontWeight: "bold", color:"#1CAAD9"}}>Sketchfab</a></p> 
</div>
</div>
        </SideBarsLayout>
        </Container>
      </BaseLayout>
    )
  }
  
export default ClayVase