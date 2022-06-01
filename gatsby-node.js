const fs = require('fs'); //import filesystem module
const express = require('express');

module.exports.createPages = async ({ graphql, actions}) => {

  // adding markdown as training
  let webinarsResult = await graphql(`
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
  `)
  webinarsResult.data.allMarkdownRemark.edges.forEach((edge) => {
    // id is added by my own to node inside onCreateNode
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/webinars/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: mdId },
    })
  })

  // adding news data from markdown
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
        edges {
          node {
            id
            frontmatter {
              pageId
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/news/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: mdId },
    })
  })

  // adding toolkit entries according to netlify CMS
  let toolAppsResult = await graphql(`
    query MyQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/toolapps/"}}) {
        edges {
          node {
            id
            frontmatter {
              linkedWebinar
              pageId
            }
          }
        }
      }
    }
  
  `)
  toolAppsResult.data.allMarkdownRemark.edges.forEach((edge) => {
    // id is added by my own to node inside onCreateNode
    const mdId = edge.node.frontmatter.pageId;
    
    /**
     * Holds reference via netlify CMS relations to training collection
     * {null | string[]}
     */
    const linkedTrainingTitles = edge.node.frontmatter.linkedTraining;
    const linkedTrainings = [];
    // loop through all training material and link tool with linked training material.
    if(linkedTrainingTitles){
      webinarsResult.data.allMarkdownRemark.edges.forEach(edge => {
        let trainTitle = edge.node.frontmatter.title;
        if(linkedTrainingTitles.includes(trainTitle)){
          linkedTrainings.push({
            title: trainTitle,
            path: "/training/" + edge.node.frontmatter.pageId
          })
        }
      })
    }
    // additionally pass to context referenced trainingMaterial
    actions.createPage({
      path: `/tools/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: edge.node.frontmatter.pageId, refTrainingCollections: linkedTrainings },
    })
  })


  // adding eshop data from markdown
  const eshopResult = await graphql(`
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
  `);

  eshopResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/eshop/${mdId}`,
      component: require.resolve(`./src/templates/eshop.js`),
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