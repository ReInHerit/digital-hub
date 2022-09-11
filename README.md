
# ReInHerit - Digital Hub

## Content / What is this?

Git repository handling development of the ReInHerit's digital hub (deployed here: https://reinherit-hub.eu/)
(Check https://reinherit-hub.eu/about/imprint for additional information)

## Deployed page 

- https://reinherit-hub.eu/


## Technical key aspects

(a longer more general description of the architecture you can find here: https://reinherit-hub.eu/doc)

The software consists of three main parts:

1. React / gatsby based **static generator** (following JAM-Stack - programmatically creates the digital-hub at build time)

2. Integrated software (installed / included via javascript at runtime)
  - Content Management System based on **NetlifyCMS** 
  - ...

3. Integrated external services (Embedded or linked )
  - **Gitter chat** (based on github authentication + authorization)
  - ...


### 01. Static site generator 

#### Code structure

follows primarily standard gatsby 3.x conventions 

```sh
# NetlifyCMS handled git content, primarily .md files
./content

# custom scripts required for gatsby build workflows
./gatsby

# architectural diagrams created via draw.io 
./models

# gatsby source code
./src

# components with static hardcoded values - reusable across the application e.g. navbar (links are the same everywhere) 
./src/components/static

# dynamic components 
./src/components/shared

# template page-components. Used by gatsby to render pages per query defined inside gatsby-node.js  
./src/templates/

# static material needed for the web page
./static

# integration of netlify cms
./static/admin


#
# additional locally generated folders, like:
#

# node dependencies
./node_modules 

# build files from gatsby
./public



```

#### Configuration (gatsby)

take a look at package.json and gatsby-config.json for an overview of used dependencies and their configuration.

Primarily used were gatsby plugins to allow the access to the markdown files (produced by NetlifyCMS) via the GraphQL layer.
(like gatsby-source-filesystem). Check the documentation of these plugins for further details.




### 02. Integrated software


#### Code structure

```sh
# file for integration of netlify cms
./static/admin

# static page used to display netlify cms on the digital-hub
# (includes required script tags etc.) 
./static/admin/admin.html
# configuration of netlify cms
# like integration with github
# also: defined content-models for the digital-hub 
./static/admin/config.yml

# "saving" location of netlify cms
# created markdowns based on cms-workflow
./content

```

#### Configuration

configuration of NetlifyCMS is based on default .yml workflow (https://www.netlifycms.org/docs/configuration-options/)

netlify-cms is integrated with github and uploadcare via specific properties.

```sh
# location of the configuration
./static/admin/config.yml

```

The NetlifyCMSAuth component handles working of redirect-uri in oauth2 process.


#### Generating dynamic pages via gatsby + netlifyCMS

1. NetlifyCMS automatically pushes to ./content/  diverse .md files
2. The contents of the markdown files are then available via the standard gatsby markdown plugins at the graphql API
3. Create graphql query: Define graphql query inside ./gatsby/queries.js
4. Overview components: created via graphql queries applied inside the components -- then html is rendered according to received data. 
5. Page-components:  a. Defined generation procedure inside gatsby-config.js  b. create template component inside ./src/pages/

### 03. Integrated external services

like gitter: handled via own components (in case of embedment) or just links provided at needed sections.

#### Code structure

## Development

### 0a. Installation Requirements

- git
- node LTS 14
- vscode (stronlgy recommended)
- gatsby-cli (for gatsby 3.x)
- yarn (not necessary if using npm -- but still recommended)

### 0b. "Conceptual" requirements 

- git basics
- js basics
- node basics (package management, modules, imports etc.)
- react basics
- gatsby
- typescript basics (react / gatsby integration)

### Development workflow

#### Setup

0. Clone repository
1. Add environment files on clone root lvl (same lvl as package.json): 
  .env.development
  .env.production

```sh
# add to .env.development
BASE_URL=http://localhost:8000

# add to .env.production
BASE_URL=https://reinherit-hub.eu

```

2. inside static/admin/config.yml -> local backend needs to be set to false -> done by an __automatic script__ during build phase. (skipped when in development)
(This should be enough -- the netlify identity integrations doesn't have to be removed -> local switch will ignore any auth process)


3. start usual gatsby 3.x development workflow.

```sh
# cd to local clone (where package.json is) 
cd /path/to/my/local/clone

# start gatsby development server
# requires gatsby-cli to be installed
gatsby develop
# or
npm run develop
# or yarn 

# gatsby runs now on port displayed in shell

```

#### Local authentication: Start netlify-cms local backend

handled via netlify identity delegated to github
Access to the CMS requires write-access to the github repository

- this will tunnel authentication through local machine (if )

```sh
# run if setup from below already completed:
npx netlify-cms-proxy-server

```

Installs local dev version of netfliy CMS (+ setup requirements): https://www.netlifycms.org/docs/beta-features/
there is an easy command via npx available
-> must be a configuration entry setup in admin/config.yaml
-> + a seperate development server started on port 8081 (for more see online documentation)


## Production, staging and deployment

needs more access rights to the repository / organization. 
see internal doumentation