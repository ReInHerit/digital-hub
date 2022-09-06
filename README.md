
# ReInHerit - Digital Hub

## Content / What is this?

Git repository handling development of the ReInHerit's digital hub (deployed here: https://reinherit-hub.eu/)
(Check https://reinherit-hub.eu/about/imprint for additional information)

## Deployed page 

- https://reinherit-hub.eu/

## Staging server

- https://distracted-torvalds-d96327.netlify.app/

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


### 02. Integrated software

#### Code structure

### 03. Integrated external services

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

#### (Optional) Local authentication: Start netlify-cms local backend

- this will tunnel authentication through local machine

```sh
# run if setup from below already completed:
npx netlify-cms-proxy-server

```

Installs local dev version of netfliy CMS (+ setup requirements): https://www.netlifycms.org/docs/beta-features/
there is an easy command via npx available
-> must be a configuration entry setup in admin/config.yaml
-> + a seperate development server started on port 8081 (for more see online documentation)


## Staging

1. pull request towards "deploy-netlify"
2. wait few minutes - and then check https://distracted-torvalds-d96327.netlify.app/ (check for cashed refresh!)
3. check operations on netlify


### Netlify (Staging server)

- basic netlify setup procedure described here: https://github.com/ReInHerit/digital-hub/issues/5

- general workflow pattern:
  -> develop in master (or other branches) -> pull request to netlify-deploy
  -> releases will be handled in the future according to different milestones and semantic versioning.

- netlify is setup to deploy from the deploy-netlify branch.
  -> don't push against the branch via code / only pull request new code to branch.
  -> building on the server will be __initiated by manually__.


#### Authentication: Netlify identity (for Netlify CMS) 

- collection of links here: https://github.com/ReInHerit/digital-hub/issues/9

- needed to be setup in netlify web interface
  - allowing to access the linked github repository.
  - for the cms AND for building the gatsby deployment version.

- check: identity + gatsby build procedures etc.
  -> implementation details here: https://github.com/ReInHerit/digital-hub/issues/9


## Production and deployment

As production environment github pages was chosen. The procedure 
follows the standard procedures necessary to run a website using a github repository.


### Build and deploy new version

handled via script located in ./deploy
(make sure that git credentials are correctly setup on your dev machine - otherwise the script will fail)

```sh
# builds production files in repo-clone under <root>/public 
npm run build

# deploys files from public folder to reinherit.github.io
npm run deploy

```

### Authentication (Netlify CMS)

handled via netlify identity delegated to github
Access to the CMS requires write-access to the github repository