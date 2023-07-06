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
  const FACTSHEETS_PAGES = `
  query FactsheetsQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/factsheets/"}}) {
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

const BESTPRACTICES_PAGES = `
query BestPracticesQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/bestpractices/"}}) {
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

const GAMEDOC_PAGES = `
query GameDocQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/gamedoc/"}}) {
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
const EXHIBDOC_PAGES = `
query ExhibDocQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/exhibdoc/"}}) {
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

 
  return {
    WEBINARS_PAGES,
    NEWS_PAGES,
    TOOL_APPS_PAGES,
    TOOL_COMPONENTS_PAGES,
    FACTSHEETS_PAGES,
    ESHOP_PAGES,
    FAQ_PAGES,
    MANUAL_PAGES,
    BESTPRACTICES_PAGES,
    GAMEDOC_PAGES,
    EXHIBDOC_PAGES
  }
})()
