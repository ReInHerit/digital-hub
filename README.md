
# ReInHerit - Digital Hub

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

- inside static/admin/config.yml -> change local backend to false
(This should be enough -- the netlify identity integrations doesn't have to be removed -> local switch will ignore any auth process)



### 2. Netlify

- check: identity + gatsby build procedures etc.