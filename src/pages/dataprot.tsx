import React from "react"
import ImageEditor from "../components/shared/ImageEditor";
import BaseLayout from "../components/static/BaseLayout"
import EngageImage from "../components/shared/EngageImage";
import { Col, Row } from "react-bootstrap";

const DataProtectionPage = () => {

  const [url, setUrl] = React.useState("https://picsum.photos/id/227/600/400");

  return (
    <BaseLayout>
      <h1>Image Editor</h1>
      <p>Test playground for image-editor</p>
      <p>{url}</p>
      
      {/* <ImageEditor imgAddress={url}></ImageEditor> */}
      
      <hr/>

      <Row>
        <Col md={5}>
          <EngageImage imgAddress={url}></EngageImage>
        </Col>
        <Col md={5}>
          <EngageImage imgAddress={"https://picsum.photos/id/220/600/400"}></EngageImage>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={10}>
        <EngageImage imgAddress={"https://picsum.photos/id/22/400/300"}></EngageImage>
        </Col>
      </Row>
      <br />
      <EngageImage imgAddress={"https://picsum.photos/id/12/1000/1000"}></EngageImage>
      

    </BaseLayout>
  )
}

export default DataProtectionPage
