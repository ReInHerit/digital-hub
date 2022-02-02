import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons"
import { faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../../components/shared/ReinCardGrid"
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../../components/static/BaseLayout"

const Designs = () => {
  return (
    <BaseLayout>
      <h2>Designs</h2>

      <SideMainLayout>
      <ReinCardGrid>
          <ReinGridCard
            key={"edge.node.fields.typeCountId"}
            excerpt={"edge.node.excerpt"}
            faIcon={faObjectUngroup}
            targetAudience={["VISITOR"]}
            title="Design1"
            type="tools"
            url={`google.com`}
            uid="123233"
          ></ReinGridCard>
          <ReinGridCard
            key={"edge.node.fields.typeCountIddasd"}
            excerpt={"edge.node.excerpt"}
            faIcon={faObjectUngroup}
            targetAudience={["VISITOR"]}
            title="Design1"
            type="tools"
            url={`google.com`}
            uid="123233"
          ></ReinGridCard>
          <ReinGridCard
            key={"edge.node.fields.typeCountIdddddd"}
            excerpt={"edge.node.excerpt"}
            faIcon={faObjectUngroup}
            targetAudience={["VISITOR"]}
            title="Design1"
            type="tools"
            url={`google.com`}
            uid="123233"
          ></ReinGridCard>
          <ReinGridCard
            key={"5"}
            excerpt={"edge.node.excerpt"}
            faIcon={faObjectUngroup}
            targetAudience={["VISITOR"]}
            title="Design1"
            type="tools"
            url={`google.com`}
            uid="123233"
          ></ReinGridCard>
          <ReinGridCard
            key={"99"}
            excerpt={"edge.node.excerpt"}
            faIcon={faObjectUngroup}
            targetAudience={["VISITOR"]}
            title="Design1"
            type="tools"
            url={`google.com`}
            uid="123233"
          ></ReinGridCard>
              
        </ReinCardGrid>
      </SideMainLayout>

    </BaseLayout>
  )
}

export default Designs
