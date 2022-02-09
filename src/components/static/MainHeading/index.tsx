import React from "react"

interface Props {
  children: string
  subHeading?: string
  [property: string]: any
}

const MainHeading: React.FC<Props> = props => (
  <>
    <h1 {...props}>{props.children}</h1>
    {props.subHeading && <h2 className="h5">{props.subHeading}</h2>
    
    }
  </>
)

export default MainHeading
