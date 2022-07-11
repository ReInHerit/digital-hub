import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"

interface Props {
  children: string
  subHeading?: string |JSX.Element
  subText?: string
  [property: string]: any
}

const MainHeading: React.FC<Props> = props => (
  <div className="bg-white p-3 p-md-5 shadow rounded mb-3">
    <h1 {...props}>{props.children}</h1>
    <hr></hr>
    {props.subHeading && <h2 className="h5">{props.subHeading}</h2>}
    {props.subText && <p>{props.subText}</p>}
    <Link to="/" className="text-decoration-none"><img src="/images/rein_logo.jpg" style={{width:40}}></img> <b style={{color:"rgb(46, 172, 200)"}}>Home</b></Link> / <Link className="text-decoration-none" to=""><b style={{color:"#cb4b5f"}}>Demo</b></Link> / ...
  </div>
)

export default MainHeading
