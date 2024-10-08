import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"

interface Props {
  children: string
  subHeading?: string | JSX.Element
  subText?: string
  breadCrumb?: {
    label: string
    value: string
  }[]
  [property: string]: any
}

const MainHeading: React.FC<Props> = props => (
  <>
    <div className="mb-3" style={{fontSize:"1.25em"}}>
      <Link to="/" className="text-decoration-none">
        <b style={{ color: "rgb(46, 172, 200)" }}>Home</b>
      </Link>
      {props.breadCrumb &&
        props.breadCrumb.length > 0 &&
        props.breadCrumb.map((bread, index) => (
          <div key={`rein_bread_${index}`} className="d-inline">
            <span> / </span>
            { index === 0 ? <b><Link style={{color: index === 0 ? "#ee3f98" : "", textEmphasis: "800"}} key={`breadcrumb__${index}`} className="text-decoration-none" to={bread.value}>
              {bread.label}
            </Link></b> : <Link style={{color: index === 0 ? "#ee3f98" : "", textEmphasis: "800"}} key={`breadcrumb__${index}`} className="text-decoration-none" to={bread.value}>
              {bread.label}
            </Link>}
          </div>
        ))}
    </div>
    <div className="p-3 p-md-4 shadow rounded mb-3 bg-white">
      <div>
        <h1 className="h2" {...props}>
          {props.children}
        </h1>

        {/* <hr></hr> */}
        {props.subHeading && <h2 className="h5">{props.subHeading}</h2>}
        {props.subText && <p>{props.subText}</p>}
      </div>
    </div>
  </>
)

export default MainHeading
