import React from "react"
import EShopFeed from "../../components/shared/EShopFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Designs = () => {

  return (
    <BaseLayout
      pageTitle="Eshop | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Collection of digital objects from the ReInHerit museums"
        subText="All the digital objects in the ReInHerit eShop are free to download."
        breadCrumb={[
          {label:"Eshop", value:"/eshop"}
        ]}
      >eShop</MainHeading>
      <EShopFeed></EShopFeed>
    </BaseLayout>
  )
}

export default Designs
