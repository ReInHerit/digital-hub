import React from "react"
import ImageEditor from "../components/shared/ImageEditor";
import BaseLayout from "../components/static/BaseLayout"

const DataProtectionPage = () => {

  const [url, setUrl] = React.useState("https://picsum.photos/id/237/200/300");

  React.useEffect(() => {
    // small example code increasing the counter for the id accessed every 5 secs
    let counter = 1;
    setInterval(() => {
      counter++;
      setUrl(`https://picsum.photos/id/${counter}/200/300`)
    }, 5000)

  }, [])

  return (
    <BaseLayout>
      <h1>Data protection</h1>
      
      <ImageEditor imgAddress={url}></ImageEditor>
      
    </BaseLayout>
  )
}

export default DataProtectionPage
