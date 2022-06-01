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

  const TOOLS_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/toolapps/"}}) {
        edges {
          node {
            frontmatter {
              linkedWebinars
              pageId
            }
          }
        }
      }
    }
  ` 

  const ESHOP_PAGES = `
    query EshopQuery {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/eshop/"}, frontmatter: {}}
      ) {
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
    NEWS_PAGES,
    TOOLS_PAGES,
    ESHOP_PAGES
  }
})()
