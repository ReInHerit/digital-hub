import React from "react"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const NotFoundPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Requested page is currently under development and will be available soon">
        Coming soon
      </MainHeading>
      <p className="w-75">From summer 2022 to autumn 2023 the ReInHerit Digital-Hub is under pilot phase. The content of the page will be subsequently added / enhanced during this project phase. Provided resources might get unaivalable, changed or adapted. </p>
    </BaseLayout>
  )
}

export default NotFoundPage
