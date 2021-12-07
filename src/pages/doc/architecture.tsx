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
        <p>Context - Containers - Components - Code</p>
        <p>uat tortor. Curabitur ornare ligula in ante accumsan, nec venenatis est luctus. Praesent vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
        <p>uat tortor. Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam vitae felis blandit ex tempus facilisis. Nam imperdiet, lorem condimentum facilisis efficitur, felis justo commodo lorem, commodo tincidunt nisl felis nec quam.</p>
        <br />
        <br />
        <h2 className="h3"><b>C</b>ontext: System context diagram</h2>
        <p>Shows connection between ... Curabitur dnt vel aliquet justo, sagittis egestas nunc. Aliquam</p>
        <br />
        <a href="/images/diagrams/c4_system_context.jpg" target="_blank"><img src="/images/diagrams/c4_system_context.jpg" alt="c4 system context diagram" style={{maxWidth: "100%"}}></img></a>

      
      
      </SideBarsLayout>
      
    </BaseLayout>
  )
}

export default Architecture
