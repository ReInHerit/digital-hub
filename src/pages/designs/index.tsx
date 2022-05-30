import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons"
import { faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Badge, Form } from "react-bootstrap"
import EShopFeed from "../../components/shared/EShopFeed"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../../components/shared/ReinCardGrid"
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const Designs = () => {

  const tags = ["portrait", "landscape", "etc."]

  return (
    <BaseLayout>
      <MainHeading
        subHeading="Designs available on the digital hub"
      >eShop</MainHeading>
      <EShopFeed></EShopFeed>
    </BaseLayout>
  )
}

export default Designs
