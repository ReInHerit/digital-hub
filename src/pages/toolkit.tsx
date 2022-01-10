import { faDeaf, faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
import ToolkitFeed from "../components/shared/ToolkitFeed"
import BaseLayout from "../components/static/BaseLayout"

const Toolkit = () => {
  return (
    <BaseLayout>
      <h1>ReInHerit Toolkit</h1>
      <p>Tools available via the ReInHerit toolkit.</p>
      <br />
      <SideMainLayout
        	side={
            <>
              <ul style={{listStyle:"none", padding:0}}>
                <li>
                  REST-API
                </li>
                <li>
                  Library
                </li>
                <li>
                  Web-Interface
                </li>
                <li>
                  GraphQL-API
                </li>
                <li>
                  Application
                </li>
                <li>
                  CLI
                </li>
                <li>
                  Python
                </li>
                <li>
                  Java
                </li>
                <li>
                  X-Technologies
                </li>
                <li>
                  Javascript
                </li>
                <li>
                  Typescript
                </li>
                <li>
                  Web development
                </li>
                <li>
                  Economics
                </li>
                <li>
                  Cultural Heritage
                </li>
                <li>
                  History
                </li>
                <li>
                  Museology
                </li>
                <li>
                  Machine Learning
                </li>
                <li>
                  Topic Modeling
                </li>
                <li>
                  NLP
                </li>
                <li>
                  GIS
                </li>
                <li>
                  Relational DB
                </li>
              </ul>
            </>
          }
      >
        <ToolkitFeed></ToolkitFeed>
      </SideMainLayout>
    </BaseLayout>
  )
}

export default Toolkit
