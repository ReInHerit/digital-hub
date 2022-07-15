// Author: Sebastian Stoff
// Desc: Small deployment script to push built gatsby files to hardcoded git-remote.
// Used primarily to redeploy gatsby built files on github pages. 


var ghpages = require('gh-pages');

(() => {

  const GIT_REPO = 'https://github.com/ReInHerit/reinherit.github.io.git';
  const BRANCH = 'main';

  console.log("*** Deploying now gatsby files to: " + GIT_REPO);
  console.log("*** Don't forget to build your files first! (e.g. via 'npm run build') Otherwise an outdated page-build might be deployed.")

  ghpages.publish('public', {
    branch: BRANCH,
    repo: GIT_REPO
  }, () => {
    console.log("*** Deployment finished");
  });

})();

