import React from "react"


// maybe need more deps like FileSaver for downloading stuff

//according to: http://nhn.github.io/tui.image-editor/latest/#via-package-manager

const ImageEditor = () => {

  const isBrowser = typeof window !== "undefined"

  React.useEffect(() => {

    if(isBrowser){

        console.log("RUN!");

      // Create image editor
      //@ts-ignore
      const ImageEditor = require('tui-image-editor');

      // options according to: http://nhn.github.io/tui.image-editor/latest/ImageEditor
      const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
        includeUI: {
          loadImage: {
            // path: '/images/ReInHerit-1.jpg',
            path: 'https://picsum.photos/id/237/200/300',
            name: 'SampleImage',
          },
          initMenu: 'filter',
          menuBarPosition: 'bottom',
          uiSize: {
            width: "70vw",
            height: "100vh"
          },
        },
        cssMaxWidth: 1000,
        cssMaxHeight: 800,
        
        selectionStyle: {
          cornerSize: 20,
          rotatingPointOffset: 70,
        },
      });

    }

  }, [])

  return <>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/tui-image-editor/3.15.2/tui-image-editor.css"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tui-color-picker@2.2.7/dist/tui-color-picker.css"></link>

<div style={{height:"1000px !important", width:"1000px"}} id="tui-image-editor"></div>
</>
}


export default ImageEditor;