const path = require('path');
const fs = require('fs'); //import filesystem module
const express = require('express');
const mdPagesArray = require('./static/pageIds.json');


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== "MarkdownRemark")return;

  // 
  // Assigns unique and stable ids to all generated markdown pages. 
  // Saves and loads values to json file to keep values stable across build processes 
  // adds leading character that describes type of given item.
  //

  let _remarkTypeCountId = null;
  let filePathId = node.fileAbsolutePath.split("/content/")[1]
  let firstCharType = node.frontmatter.type[0]

  // improve here https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
  if(!mdPagesArray.includes(filePathId)){
    mdPagesArray.push(filePathId);
    _remarkTypeCountId = `${firstCharType}${mdPagesArray.length}`;  
  } else {
    let index = mdPagesArray.indexOf(filePathId) + 1;
    _remarkTypeCountId = `${firstCharType}${index}`;  
  }

  createNodeField({
    node,
    name:"typeCountId",
    value: _remarkTypeCountId
  })

  fs.writeFileSync(`.${path.sep}static${path.sep}pageIds.json`, JSON.stringify(mdPagesArray));

}


module.exports.createPages = async ({ graphql, actions}) => {

  // adding markdown as training
  let res = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/training/"}}) {
        edges {
          node {
            id
            fields {
              typeCountId
            }
          }
        }
      }
    }
  
  `)
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    // id is added by my own to node inside onCreateNode
    const mdId = edge.node.fields.typeCountId
    actions.createPage({
      path: `/content/training/${mdId}`,
      component: require.resolve(`./src/templates/training.js`),
      context: { id: edge.node.id },
    })
  })

  // adding news data from markdown
  const { data } = await graphql(`
  query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
      edges {
        node {
          id
          fields {
            typeCountId
          }
        }
      }
    }
  }
  
  
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.fields.typeCountId
    actions.createPage({
      path: `/content/news/${mdId}`,
      component: require.resolve(`./src/templates/training.js`),
      context: { id: edge.node.id },
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