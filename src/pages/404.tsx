import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout
      pageTitle="404 | ReInHerit Digital Hub"
    >
      <MainHeading 
      subHeading="The requested page is currently under development and will be available soon."
      subText="From summer 2022 to autumn 2023 the ReInHerit Digital Hub will be frequently expanded and improved, we are sorry for any incovenience during this time."
      breadCrumb={[{label:"Coming soon...", value:"/"}]}
      >
        Coming soon
      </MainHeading>
      <br></br>
      <FontAwesomeIcon icon={faWrench} size="2x"></FontAwesomeIcon>
    </BaseLayout>
  )
}

export default NotFoundPage
