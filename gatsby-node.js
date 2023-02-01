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

  // adding news data from markdown
  const factsheetsResult = await graphql(DIGIHUB_QUERIES.FACTSHEETS_PAGES);

  factsheetsResult.data.allMarkdownRemark.edges.forEach(edge => {
    const mdId = edge.node.frontmatter.pageId
    actions.createPage({
      path: `/factsheets/${mdId}`,
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
 // const exhibitionCollectionResult = await graphql(DIGIHUB_QUERIES.EXHIBITION_COLLECTION_PAGES);
 // exhibitionCollectionResult.data.allMarkdownRemark.edges.forEach(edge => {
  //  const mdId = edge.node.frontmatter.pageId
  //  actions.createPage({
  //    path: `/exhibitions/${mdId}`,
  //    component: require.resolve(`./src/templates/exhibitionObject.js`),
  //    context: { id: mdId },
  //  })
  // });
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

const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
      plugins: [
          new webpack.ProvidePlugin({
              Buffer: [require.resolve("buffer/"), "Buffer"],
          }),
      ],
      resolve: {
          fallback: {
              "stream": require.resolve("stream-browserify"),
              "assert": false,
              "util": false,
              "http": false,
              "https": false,
              "os": false,
          //   "assert": require.resolve("assert/"),
          //   "buffer": require.resolve("buffer"),
              "crypto": require.resolve("crypto-browserify"),
          //    "https": require.resolve("https-browserify"),
          //    "os": require.resolve("os-browserify/browser"),
          //    "stream": require.resolve("stream-browserify"),
              "path": require.resolve("path-browserify"),
          //    "http": require.resolve("stream-http"),
          //    "util": require.resolve("util/"),
          //    "http": false,
              "fs": false,
              "tls": false,
              "net": false,
              "child_process": false,
          },
      },
  })
}