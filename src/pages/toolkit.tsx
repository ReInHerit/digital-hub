import { faDeaf, faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
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
        <ReinCardGrid>
          <ReinGridCard
            url="/"
            excerpt="some content"
            type="nice"
            faIcon={faTools}
            title="Tensor Flow"
            targetAudience={["free", "CC BY 4.0", "Tutorial", "Webinar", "Moderate documentation"]}
            uid={"1"}
          >
            
          </ReinGridCard>
          <ReinGridCard
            url="/"
            excerpt="some content"
            type="nice"
            faIcon={faTools}
            title="NLTK"
            targetAudience={["$$$", "Tutorial", "Webinar", "no documenation"]}
            uid={"2"}
          >
            
          </ReinGridCard>
          <ReinGridCard
            url="/"
            excerpt="Pandas"
            type="nice"
            faIcon={faTools}
            title="JSON Placeholder"
            targetAudience={["Webinar"]}
            uid={"2"}
          >
            
          </ReinGridCard>
          <ReinGridCard
            url="/"
            excerpt="REST API and Web Interface for..."
            type="nice"
            faIcon={faTools}
            title="Lorem picsum"
            targetAudience={["Bad documentation"]}
            uid={"2"}
          >
            
          </ReinGridCard>
          <ReinGridCard
            url="/"
            excerpt="Pandas"
            type="Open data provided by Iceland gov services"
            faIcon={faTools}
            title="APIS.is"
            targetAudience={["free","good documentation"]}
            uid={"2"}
          >
            
          </ReinGridCard>
        </ReinCardGrid>
      </SideMainLayout>
    </BaseLayout>
  )
}

export default Toolkit
