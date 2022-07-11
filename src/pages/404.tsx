import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading 
      subHeading="Requested page is currently under development and will be available soon"
      subText="From summer 2022 to autumn 2023 the ReInHerit Digital-Hub is under pilot
      phase. The content of the hub will be subsequently added / enhanced
      during this project phase. Provided resources might get unavailable,
      changed or adapted during that time.">
        Coming soon
      </MainHeading>
      <br></br>
      <FontAwesomeIcon icon={faWrench} size="2x"></FontAwesomeIcon>
    </BaseLayout>
  )
}

export default NotFoundPage
