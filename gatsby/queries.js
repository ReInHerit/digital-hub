

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
  `;


  return {
    WEBINARS_PAGES
  }

})();