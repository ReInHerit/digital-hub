import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"

const Architecture = () => {
  return (
    <BaseLayout>
      <SideBarsLayout
        left={<DocNav/>}
      >
        <h1>Software architecture of ReinHerit</h1>
        <p>Praesent vel aliquet justo, sagittis egestas nunc.</p>
        
        
        <br/>
        <h2 className="h3">C4 diagram</h2>
        <a href="https://www.youtube.com/watch?v=x2-rSnhpw0g&amp;list=PL8hhC6DypRWRChPJwmjfT4Jvv-YHu7xLS&amp;index=8&amp;t=1200s&amp;ab_channel=AgileontheBeach" target="_blank">C4 Model Introduction</a>
        <p>Context - Containers - Components - Code</p>
        <p>uat tortor. Curabitur ornare ligula in ante accumsan, nec venenatis est luctus. Praesent vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
        <p>uat tortor. Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
        <br />
        <br />
        <h2 className="h3">1. <b>C</b>ontext: System context diagram</h2>
        <p>Shows most abstract context of the planned system -- in our case the Digital Hub. Details connection between central use-cases, actors, internal and external systems.</p>
        <br />
        <a href="/images/diagrams/c4_system_context.jpg" target="_blank"><img src="/images/diagrams/c4_system_context.jpg" alt="c4 system context diagram" style={{maxWidth: "100%"}}></img></a>
        <br />
        <br />
        <br />
        <br />
        <h2 className="h3">2. <b>C</b>ontainer: Container diagram</h2>
        <p>Focuses on individial systems defined in the system context diagram</p>
        <a href="/images/diagrams/rein_c4_2container.jpg" target="_blank"><img src="/images/diagrams/rein_c4_2container.jpg" alt="c4 container diagram" style={{maxWidth: "100%"}}></img></a>
      
      </SideBarsLayout>
      
    </BaseLayout>
  )
}

export default Architecture
