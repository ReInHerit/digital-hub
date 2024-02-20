import React from "react"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"
import { Container } from "react-bootstrap"


const overviewHackahton = () => {
    return (
      <BaseLayout
      pageTitle="ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence"
    >
      <MainHeading subHeading="January 2024">
      ReInHerit SMART TOURISM HACKATHON at the CYENS Center of Excellence</MainHeading>
      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <p><b>Special Award Winner from the European Cultural Tourism Council: The Archeological Odyssey, by Georgiou Athanasiadis and Daniil Georgiou, received the special award of 1,000 euros.</b></p>
      <p>In the heart of a bustling city, a small but passionate team of game developers embarked on a beautiful journey to bring history to life by creating the "Archaeological Odyssey." As the team delved into development, challenges arose. Balancing historical accuracy with engaging gameplay proved to be a delicate task. The mobile platform created constraints that required creative solutions. However, each challenge was met with perseverance and a commitment to delivering an exceptional gaming experience. The team marveled at the vibrant landscapes, captivating character designs, and historically accurate images. With a playable prototype in hand, the team entered the testing phase. Mentor feedback was invaluable, leading to numerous iterations that improved the gameplay and user interface. 
<a href="https://drive.google.com/file/d/1dFYoqTlbKyQOBIjtZCnyRWpA_C6X_0UD/view" target="_blank" rel="noreferrer">See a video of the project.</a>
</p>
<p>
<a style={{borderRadius:0}} href="/pdfs/nicosia/game.pdf" download="presentation" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download the project presentation.</a>
    </p>
        </Container>
      </BaseLayout>
    )
  }
  
export default overviewHackahton