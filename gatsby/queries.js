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
  const SUMMERSCHOOL_PAGES = `
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/summerschool/"}}) {
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
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/gamedoc/)/"}}) {
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
  const ABOUT_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/about/)/"}}) {
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
  const DOC_PAGES = `
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/doc/)/"}}) {
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

  const ESHOPDOC_PAGES = `
  query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/eshopdoc/)/"}}) {
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

const FIRSTPERFDOC_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/firstperfdoc/)/"}}) {
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

const HACKATHONNICOSIA_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/hackathonnicosia/)/"}}) {
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
const HANDBOOK_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/handbook/)/"}}) {
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

const MUSEUMCALLS_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/museumcalls/)/"}}) {
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

const SECONDPERFDOC_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/secondperfdoc/)/"}}) {
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

const TRAVELLINGEXHIB_PAGES = `
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/travellingexhib/)/"}}) {
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

const DELIVERABLES_PAGES = `
query DeliverablesQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/deliverables/)/"}}) {
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
    TOOL_APPS_PAGES,
    TOOL_COMPONENTS_PAGES,
    FACTSHEETS_PAGES,
    ESHOP_PAGES,
    BESTPRACTICES_PAGES,
    GAMEDOC_PAGES,
    EXHIBDOC_PAGES,
    SUMMERSCHOOL_PAGES,
    ABOUT_PAGES,
    DOC_PAGES,
    ESHOPDOC_PAGES,
    FIRSTPERFDOC_PAGES,
    HACKATHONNICOSIA_PAGES,
    HANDBOOK_PAGES,
    MUSEUMCALLS_PAGES,
    SECONDPERFDOC_PAGES,
    TRAVELLINGEXHIB_PAGES,
    DELIVERABLES_PAGES,
  }
})()
