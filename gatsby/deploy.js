// Author: Sebastian Stoff
// Desc: Small deployment script to push built gatsby files to hardcoded git-remote.
// Used primarily to redeploy gatsby built files on github pages. 


var ghpages = require('gh-pages');

(() => {

  const GIT_REPO = 'https://github.com/ReInHerit/reinherit.github.io.git';
  const BRANCH = 'main';

  console.log("*** Deploying now gatsby files to: " + GIT_REPO);

  ghpages.publish('public', {
    branch: BRANCH,
    repo: GIT_REPO
  }, () => {
    console.log("*** Deployment finished");
  });

})();

