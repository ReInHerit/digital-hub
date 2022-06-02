import React from "react"
import EShopFeed from "../../components/shared/EShopFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Designs = () => {

  return (
    <BaseLayout>
      <MainHeading
        subHeading="Designs available on the digital hub"
      >eShop</MainHeading>
      <p>Here could be some text ... e.g. an introduction about the content etc.</p>
      <EShopFeed></EShopFeed>
    </BaseLayout>
  )
}

export default Designs
