const fs = require('fs'); //import filesystem module
const express = require('express');
const DIGIHUB_QUERIES = require('./gatsby/queries.js').DIGIHUB_QUERIES;

module.exports.createPages = async ({ graphql, actions}) => {

  // adding markdown as training
  let webinarsResult = await graphql(DIGIHUB_QUERIES.WEBINARS_PAGES);
    
  webinarsResult.data.allMarkdownRemark.edges.forEach((edge) => {
    // id is added by my own to node inside onCreateNode
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/webinars/${mdId}`,
      component: require.resolve(`./src/templates/webinar.js`),
      context: { id: mdId },
    })
  })

  // adding news data from markdown
  const newsResult = await graphql(DIGIHUB_QUERIES.NEWS_PAGES);

  newsResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/news/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: mdId },
    })
  })

  // adding toolkit apps according to netlify CMS
  let toolAppsResult = await graphql(DIGIHUB_QUERIES.TOOL_APPS_PAGES);
  toolAppsResult.data.allMarkdownRemark.edges.forEach((edge) => {
    const mdId = edge.node.frontmatter.pageId;
    actions.createPage({
      path: `/tools/apps/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: edge.node.frontmatter.pageId},
    })
  })

  // adding toolkit components according to netlify CMS
  let toolComponentsResult = await graphql(DIGIHUB_QUERIES.TOOL_COMPONENTS_PAGES);
  toolComponentsResult.data.allMarkdownRemark.edges.forEach((edge) => {
    const mdId = edge.node.frontmatter.pageId;
    actions.createPage({
      path: `/tools/components/${mdId}`,
      component: require.resolve(`./src/templates/toolkit.js`),
      context: { id: edge.node.frontmatter.pageId},
    })
  })


  // adding eshop data from markdown
  const eshopResult = await graphql(DIGIHUB_QUERIES.ESHOP_PAGES);
  eshopResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/eshop/${mdId}`,
      component: require.resolve(`./src/templates/eshop.js`),
      context: { id: mdId },
    })
  });

  // adding faq data from markdown
  const faqResult = await graphql(DIGIHUB_QUERIES.FAQ_PAGES);
  faqResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/doc/faq/${mdId}`,
      component: require.resolve(`./src/templates/faqHowto.js`),
      context: { id: mdId },
    })
  });

  // adding Hub documentation data from markdown
  const manualsResult = await graphql(DIGIHUB_QUERIES.MANUAL_PAGES);
  manualsResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/doc/howto/${mdId}`,
      component: require.resolve(`./src/templates/faqHowto.js`),
      context: { id: mdId },
    })
  });

  // adding object-collection data from markdown
  const exhibitionCollectionResult = await graphql(DIGIHUB_QUERIES.EXHIBITION_COLLECTION_PAGES);
  exhibitionCollectionResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/exhibitions/${mdId}`,
      component: require.resolve(`./src/templates/exhibitionObject.js`),
      context: { id: mdId },
    })
  });

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