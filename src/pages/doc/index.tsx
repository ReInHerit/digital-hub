import { Link } from "gatsby"
import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"

const DocAbout = () => {
  return (
    <BaseLayout>
      <SideBarsLayout
        left={<DocNav/>}
        right={<>Dummy Content</>}
      >
        <h1>Documentation about</h1>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default DocAbout
