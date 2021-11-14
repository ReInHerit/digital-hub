import React from "react"
import ImageEditor from "../components/shared/ImageEditor";
import BaseLayout from "../components/static/BaseLayout"
import EngageImage from "../components/shared/EngageImage";

const DataProtectionPage = () => {

  const [url, setUrl] = React.useState("https://picsum.photos/id/227/600/400");

  return (
    <BaseLayout>
      <h1>Image Editor</h1>
      <p>Test playground for image-editor</p>
      <p>{url}</p>
      
      {/* <ImageEditor imgAddress={url}></ImageEditor> */}
      
      <hr/>

      <EngageImage imgAddress={url}></EngageImage>

    </BaseLayout>
  )
}

export default DataProtectionPage
