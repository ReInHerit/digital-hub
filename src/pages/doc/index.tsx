import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"
import MainHeading from "../../components/static/MainHeading"

const DocAbout = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="Materials / manuals about the ReInHerit digital-hub itself"
        subText="Here you'll find explainatory material, helpful texts and graphics for the digital-hub itself."
      >Documentation</MainHeading>

      <Container fluid className="bg-white p-md-4 p-sm-3 shadow border-0">
      <SideBarsLayout
        left={<DocNav/>}
      >
        
        <h2>Digital hub architecture</h2>
        <p>
          The core of ReInHerit's digital hub consists of a <b>statically generated dynamic site</b> with 
           <b> integrated internal and external services</b> in form of collaboration and content management systems.
          Consequently, the public interface of the digital hub is the main product of own implementation efforts, whereas 
          provided CRUD functionality (=contributation of content by the user) is being delegated to before mentioned integrated services.
        </p>
        <p>Generally spoken, all architectural decision were made in regards to fulfill the individual aspects of our use cases
            as specifically as possible on one hand, but to also ensure maintainability via using
           standardized and proven workflows, on the other hand.</p>
        <h3>A JAM-stack architecture</h3>
        <p>
          The digital-hub follows the JAM-stack architectural approach. "JAM" stands for
          "Javascript, APIs and Markup" and describes a specific way how different components may 
          be integrated in a standardized and maintainable way. This allows reuse, collaboration 
          and effordability of complex technologies even for small development projects.  
        </p>
        <h4>J - Javascript</h4>
        <p>
          Following, the public interface of the digital hub is being dynamically built from the content 
          provided by the project partners. As most suitable technology a static site generator (=Javascript application)
          as a typical part of the JAM-stack architecture approach was chosen. The main advantage of a dynamically built static site (in comparison 
          to a direct dynamic site) is significantly reduced complexity, because there is no
          need to run self implemented web-services exposed to the general public.   
        </p>
        <h4>APIs</h4>
        <p>
          Integrated services (APIs) are mainly used to provide CRUD (Create-Read-Update-Delete) functionality for the project partners.
          For this NetlifyCMS was sepcifically configured for the project's needs. As external APIs
          oauth2 patterns are being used and chat functionalities are provided by Gitter.
        </p>
        <h4>M - Markdown</h4>
        <p>
          Again following JAM-stack, research data is being stored as markdown inside the project's git repository.
          Different (markdown based) data-models for the individual project partners are being used to 
          render different views on the public interface. 
        </p>
        
        <h2 className="h3">C4 - System context diagram</h2>
        <a href="/images/diagrams/c4_system_context.jpg" target="_blank"><img src="/images/diagrams/c4_system_context.jpg" alt="c4 system context diagram" style={{maxWidth: "100%"}}></img></a>
        <br />
        <br />
        <br />
        <h2 className="h3">C4 - Container diagram</h2>
        <p>Focuses on individial systems defined in the system context diagram</p>
        <a href="/images/diagrams/rein_c4_2container.jpg" target="_blank"><img src="/images/diagrams/rein_c4_2container.jpg" alt="c4 container diagram" style={{maxWidth: "100%"}}></img></a>
        <br />
        <br />
        <br />
        <br />
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default DocAbout
