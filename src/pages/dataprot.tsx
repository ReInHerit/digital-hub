import React from "react"
import BaseLayout from "../components/static/BaseLayout"

import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const myTheme = {
  // Theme object to extends default dark theme.
};

const DataProtectionPage = () => {
  return (
    <BaseLayout>
      <h1>Data protection</h1>
      <ImageEditor
    includeUI={{
      loadImage: {
        path: '/images/ReinHerit-1.jpg',
        name: 'SampleImage',
      },
      theme: myTheme,
      menu: ['shape', 'filter'],
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
    </BaseLayout>
  )
}

export default DataProtectionPage
