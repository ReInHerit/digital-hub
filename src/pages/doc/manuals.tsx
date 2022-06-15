import React from "react"
import ManualsFeed from "../../components/shared/ManualsFeed"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

/**
 * Renders manuals / how-to page component.
 */
const ManualsPage: React.FC = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Short helpflul descriptions on the functionalities of the ReInHerit digital-hub.">
        Manuals and how-tos
      </MainHeading>
      <p>
        Here you'll find small explainatory texts on how to use the diverese
        features of this digital-hub.
      </p>
      <ManualsFeed></ManualsFeed>
    </BaseLayout>
  )
}

export default ManualsPage
