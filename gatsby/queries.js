module.exports.DIGIHUB_QUERIES = (() => {
  const WEBINARS_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/webinars/"}}) {
        edges {
          node {
            frontmatter {
              title
              pageId
            }
          }
        }
      }
    }
  `

  const NEWS_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
        edges {
          node {
            frontmatter {
              pageId
            }
          }
        }
      }
    }
  `

  return {
    WEBINARS_PAGES,
    NEWS_PAGES
  }
})()
