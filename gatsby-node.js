const path = require('path')

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions

    // querying local files on file system
  //   const responseFileSystem = await graphql(`
  //   query {
  //     allFile(filter: {sourceInstanceName: {eq: "doc"}, relativePath: {regex: "/.md/"}}) {
  //       edges {
  //         node {
  //           name
  //           id
  //           extension
  //           sourceInstanceName
  //           size
  //           relativePath
  //           modifiedTime(fromNow: true)
  //           birthTime(formatString: "DD.MM.YYYY")
  //           childrenMarkdownRemark {
  //             excerpt
  //             html
  //             headings {
  //               value
  //             }
  //             tableOfContents
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `);

  //   const mdTemplate = path.resolve('./src/templates/markdown.js')

  //   // use data to create page for each npm node
  //   responseFileSystem.data.allFile.edges.forEach((edge) => {
  //     if(edge.node.extension !== "md")return;
  //     createPage({
  //         component: mdTemplate,
  //         path: `/doc/${edge.node.relativePath}`,
  //         context: {
  //             id: edge.node.id
  //         }
  //     })
  // })



}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/search/)) {
    page.matchPath = "/search/*"

    // Update the page.
    createPage(page)
  }
}