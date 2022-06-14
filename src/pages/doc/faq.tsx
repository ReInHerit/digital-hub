import React from "react"
import FAQFeed from "../../components/shared/FAQFeed"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"

const FAQPage = () => {
  return (
    <BaseLayout>
      <h1>Documentation</h1>
      <p>
        Description of the underlying software architecture of the Digital Hub.
      </p>
      <br />
      <SideBarsLayout left={<DocNav />}>
        <h2>FAQ</h2>
        <FAQFeed></FAQFeed>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default FAQPage
