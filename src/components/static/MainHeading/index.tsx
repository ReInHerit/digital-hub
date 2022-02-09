import React from "react"

interface Props {
  children: string
}

const MainHeading: React.FC<Props> = props => (
  <h1 style={{ color: "rgba(52 ,  166,  194, 1)" }}>{props.children}</h1>
)

export default MainHeading
