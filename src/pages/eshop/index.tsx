import React from "react"
import EShopFeed from "../../components/shared/EShopFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Designs = () => {

  return (
    <BaseLayout>
      <MainHeading
        subHeading="Collection of free downloadable artistic designs"
        subText="Here you'll find all the free artistic designs created during the ReInHerit project. All are free to download and available for the public."
        breadCrumb={[
          {label:"Eshop", value:"/eshop"}
        ]}
      >eShop</MainHeading>
      <EShopFeed></EShopFeed>
    </BaseLayout>
  )
}

export default Designs
