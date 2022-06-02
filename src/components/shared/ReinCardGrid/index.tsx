import React from "react"
import { Row } from "react-bootstrap"
import ReinGridCard from "./ReinGridCard"

/**
 * Used together with ReinGridCard to display card grids.
 * @param props 
 * @returns 
 */
const ReinCardGrid: React.FC = props => {
  return (
    <Row xs={1} md={3} xxl={3} className="g-3">
      {props.children}
    </Row>
  )
}

export default ReinCardGrid
