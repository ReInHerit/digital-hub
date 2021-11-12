import React from "react"
import BaseLayout from "../components/static/BaseLayout"

const myTheme = {
  // Theme object to extends default dark theme.
};

const DataProtectionPage = () => {
  return (
    <BaseLayout>
      <h1>Data protection</h1>
      
      <link
        rel="stylesheet"
        href="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css"
      />
      <script src="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.js"></script>
    </BaseLayout>
  )
}

export default DataProtectionPage
