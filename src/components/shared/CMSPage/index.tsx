import React from "react"
import MarkdownTransformer from "../MarkdownTransformer"

interface Props {
  url: string
}

interface CMSPageModel {
  title: string
  intro: string
}

/**
 * Requests a specific page json from given url and renders a view accordingly.
 * @param props 
 * @returns 
 */
const CMSPage: React.FC<Props> = props => {
  const [pageData, setPageData] = React.useState<CMSPageModel | undefined>()

  React.useEffect(() => {
    fetchPageData(props.url).then(respData => setPageData(respData))
  }, [])

  const fetchPageData = async (url: string) => {
    let resp
    let respData: CMSPageModel

    try {
      resp = await fetch(props.url)
      respData = await resp.json()
      return respData
    } catch (e) {
      console.error(`Failed fetching CMSPage data from: ${url}`)
      console.error(e)
    }
  }

  return pageData ? (
    <div>
      <p>{pageData.title && pageData.title}</p>
      
      <p>{pageData.intro && <MarkdownTransformer markdown={pageData.intro}></MarkdownTransformer>}</p>
    </div>
  ) : null
}

export default CMSPage
