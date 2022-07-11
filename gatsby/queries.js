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

  const TOOL_APPS_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/toolapps/"}}) {
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

  const TOOL_COMPONENTS_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/toolcomponents/"}}) {
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

  const FAQ_PAGES = `
    query FAQQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "faq"}}}) {
        edges {
          node {
            frontmatter {
              question
              pageId
              type
            }
          }
        }
      }
    }
  `

  const MANUAL_PAGES = `
    query FAQQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "howto"}}}) {
        edges {
          node {
            frontmatter {
              title
              pageId
              type
            }
          }
        }
      }
    }
  `

  const EXHIBITION_COLLECTION_PAGES = `
    query FAQQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "exhibitionCollection"}}}) {
        edges {
          node {
            frontmatter {
              title
              pageId
              type
            }
          }
        }
      }
    }
  `

  

  return {
    WEBINARS_PAGES,
    NEWS_PAGES,
    TOOL_APPS_PAGES,
    TOOL_COMPONENTS_PAGES,
    ESHOP_PAGES,
    FAQ_PAGES,
    MANUAL_PAGES,
    EXHIBITION_COLLECTION_PAGES
  }
})()
