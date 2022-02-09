import React from "react"

interface Props {
  children: string,
  [property: string]: any
}

const MainHeading: React.FC<Props> = props => (
  <h1 {...props}>{props.children}</h1>
)

export default MainHeading
