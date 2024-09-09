---
pageId: 2096bb3c-78d3-4d21-b9cc-992e6e170a2f
layout: blog
type: doc
title: Overview of the Digital Hub's architecture
date: 2024-09-09T08:02:03.389Z
target-audience:
  - PROFESSIONAL
---
The ReInHerit's Digital Hub is a static website, coded in React, and generated with Gatsby. It integrates other services to support the workflows and delivery of the content. In general, the Hub follows the JAM-stack (Javascript, APIs, and Markup) architectural approach.

### Technologies

The open source static site generator <a href="https://www.gatsbyjs.com/">Gatsby JS</a> was chosen as the main framework for the Hub. Gatsby uses React and GraphQL, enabling the querying of the data and the development of the different site components. In order to facilitate the addition of content by the project partners, Gatsby was paired with <a href="https://decapcms.org/">Decap CMS</a> (formerly Netlify CMS),           an open source content manangement system facilitating the creation of entries for the website through an user-friendly interface. The Hub is hosted on GitHub and it integrates therefore GitHub oauth for the login into Netlify.

Additional functionalities are provided by Upload Care, to support media files, and by Zulip, supporting forum and chatting possibilities.

### Content-related workflows

Once authorised, contributors can login into the Netlify CMS and add material to the Digital Hub. Each of the content in ReInHerit had specific requirements (analysed in Deliverable 4.1) and received a customised template and query functionalities within the Hub. On the backend, this means that different (markdown based) models for the individual outputs are being used to render different views on the public interface through templates (also exploiting GraphQL queries functionalities).

As a rule, the design has been kept consistent across the Hub - with the exception of the digital exhibitions - and links across the different sections (e.g. webinars and apps documentation) are offered whenever possible.