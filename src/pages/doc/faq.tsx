import React from "react"
import FAQFeed from "../../components/shared/FAQFeed"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const FAQPage = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Materials / manuals about the ReInHerit digital-hub itself">Documentation</MainHeading>
      <p>Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself.</p>
      <SideBarsLayout left={<DocNav />}>
        <h2>FAQ</h2>
        <FAQFeed></FAQFeed>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default FAQPage
