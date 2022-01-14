import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Databasket from "../components/shared/Databasket"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import BaseLayout from "../components/static/BaseLayout"

const CollectionPage = () => {
  return (
    <BaseLayout>
      <h2>Personal collection</h2>
      <Link className="text-secondary" to="/portal">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to personal space
      </Link>
      <br />
      <br />
      <Databasket></Databasket>
      
    </BaseLayout>
  )
}

export default CollectionPage
