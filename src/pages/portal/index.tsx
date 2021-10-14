import React from "react"
import { useCaseMode } from "../../hooks/useCaseMode"
import BaseLayout from "../../components/static/BaseLayout"

const PortalPage = () => {
  const { modeVal } = useCaseMode();

  return (
    <BaseLayout>
      <>
        <p>{modeVal}</p>
        <h1 style={{color: modeVal === "visitor" ? "green" : "red"}}>Portal</h1>
      </>
    </BaseLayout>
  )
}

export default PortalPage
