import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons"
import { faTools } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Badge, Form } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"
import ReinCardGrid from "../../components/shared/ReinCardGrid"
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../../components/static/BaseLayout"

const Designs = () => {

  const tags = ["portrait", "landscape", "etc."]

  return (
    <BaseLayout>
      <h2>Designs</h2>
      <p>Available via the hub</p>

      <SideMainLayout
        side={<div className="border p-4 reincard">
        Filter categories
        <br/>
        {tags.length !== 0
        ? tags.map(tag => (
            <Badge bg="white" color="black" text={"black" as "white"} className="me-1 btn border">
              {tag}
            </Badge>
          ))
        : <Badge className="me-1 btn border" bg="white" color="black" text={"black" as "white"}>
        *
      </Badge>}
      <br></br>
      <br></br>
        {tags.sort().map(curTag => (
          <Form.Check
            type="checkbox"
            // checked={tags.includes(curTag)}
            defaultChecked={false}
            key={curTag}
            // onClick={() => toggleTag(curTag)}
            label={curTag}
            value={curTag}
          ></Form.Check>
        ))}
      </div>}
      >
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
