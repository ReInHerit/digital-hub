import React from "react"
import { Col, Row } from "react-bootstrap"

interface Props {
  side?: JSX.Element | JSX.Element[]
  children?: JSX.Element | JSX.Element[]
}

/**
 * Handles left sidebar and right content layout. Checks responsive design.
 * @param props
 * @returns
 */
const SideMainLayout: React.FC<Props> = props => {
  return (
    <Row>
      <Col>{props.side}</Col>
      <Col lg={12} xxl={10}>
        {props.children}
      </Col>
    </Row>
  )
}

export default SideMainLayout
