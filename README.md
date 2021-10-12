
# ReInHerit - Digital Hub

## Installation Requirements

- git
- node LTS 14
- gatsby-cli
- yarn (not necessary if using npm -- but still recommended)


## "Conceptual" requirements 

- git workflow
- js basics
- node basics (package management, modules, imports etc.)
- react basics
- ssr: gatsby
- typescript basics


## Dev setup

```sh
# run if setup from below already completed:
npx netlify-cms-proxy-server

```



- Install local dev version of netfliy CMS (+ setup requirements): https://www.netlifycms.org/docs/beta-features/
  there is an easy command via npx available
  -> must be a configuration entry setup in admin/config.yaml
  -> + a seperate development server started on port 8081 (for more see online documentation)


## Deployment

### 1. Manual preperations

- inside static/admin/config.yml -> local backend needs to be set to false -> done by an __automatic script__ during build phase. (skipped when in development)
(This should be enough -- the netlify identity integrations doesn't have to be removed -> local switch will ignore any auth process)



### 2. Netlify

- check: identity + gatsby build procedures etc.