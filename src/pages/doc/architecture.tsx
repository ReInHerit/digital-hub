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
      </SideBarsLayout>
      
    </BaseLayout>
  )
}

export default Architecture
