import React from "react"

import 'tui-image-editor/dist/tui-image-editor.css';
// also necessary see:
// https://github.com/nhn/tui.image-editor/issues/153
import "tui-color-picker/dist/tui-color-picker.css";

import TUIImageEditor from '@toast-ui/react-image-editor';


const ImageEditor = () => {
  return <TUIImageEditor
  includeUI={{
    loadImage: {
      path: '/images/rein_eu.png',
      name: 'SampleImage',
    },
    menu: ['shape', 'filter','text'],
    initMenu: 'filter',
    uiSize: {
      width: '1000px',
      height: '700px',
    },
    menuBarPosition: 'bottom',
  }}
  cssMaxHeight={500}
  cssMaxWidth={700}
  selectionStyle={{
    cornerSize: 20,
    rotatingPointOffset: 70,
  }}
  usageStatistics={false}
/>
}


export default ImageEditor;