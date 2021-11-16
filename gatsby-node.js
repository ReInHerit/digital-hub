const path = require('path');
const fs = require('fs'); //import filesystem module
const express = require('express');

module.exports.createPages = async ({ graphql, actions}) => {

  // adding markdown as training
  let res = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/training/"}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  
  `)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.id
    actions.createPage({
      path: `/content/training/${mdId}`,
      component: require.resolve(`./src/templates/training.js`),
      context: { id: mdId },
    })
  })

  // adding news data from markdown
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/news/"}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.id
    actions.createPage({
      path: `/content/news/${mdId}`,
      component: require.resolve(`./src/templates/training.js`),
      context: { id: mdId },
    })
  })

}


exports.onPostBuild = () => {
  console.log("*********************onPOSTBUILD****************");
  console.log("CUSTOM-Script: ...setting netlify cms config local backend to false");
  
  // set netlify-cms local backend parameter to false when building the app.
  fs.readFile(".\\public\\admin\\config.yml",'utf8', (err, data) => {
    if(err)return;
    let refFile = data.replace(/local_backend: true/g, "local_backend: false");

    fs.writeFile(".\\public\\admin\\config.yml", refFile, 'utf8', function(err) {
      if (err) return console.log(err);
      console.log("WROTE NEW NETLIFY-CMS config.yml TO THE PUBLIC FOLDER");
      console.log("******************************************************");
    });
  });
 }

 // Serve files from `static` in development
 // needed for NetlifyCMS -> /admin/admin.html is statically served from dev server!#
 // (express is only installed as dev dep)
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("static"))
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


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  // disable SSR ToastTUI image editor -> will break because it references window object. 
  // see: https://www.gatsbyjs.com/docs/debugging-html-builds/#how-to-check-if-window-is-defined
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /tui-image-editor/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}