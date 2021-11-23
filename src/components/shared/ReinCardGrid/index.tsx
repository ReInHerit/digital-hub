import React from "react"
import { Row } from "react-bootstrap"
import ReinGridCard from "./ReinGridCard"

interface props {
  children: typeof ReinGridCard[]
}

/**
 * Used together with ReinGridCard to display card grids.
 * @param props 
 * @returns 
 */
const ReinCardGrid: React.FC = props => {
  return (
    <Row xs={1} md={2} xl={3} className="g-3">
      {props.children}
    </Row>
  )
}

export default ReinCardGrid
