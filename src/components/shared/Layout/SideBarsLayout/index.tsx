import React from "react"
import { Col, Container, Row } from "react-bootstrap"

interface Props {
  children: JSX.Element | JSX.Element[]
  left?: JSX.Element
  right?: JSX.Element
}

/**
 * Layout for navigation / documentation heavy pages.
 * @param props
 * @returns
 */
const SideBarsLayout: React.FC<Props> = props => {
  return (
    <Row>
      <Col xl={2}>{props.left}</Col>
      <Col xl={6}>
        <Container>{props.children}</Container>
      </Col>
      <Col xl={2}>{props.right}</Col>
    </Row>
  )
}

export default SideBarsLayout
