// Author: Sebastian Stoff
// Desc: Small deployment script to push built gatsby files to hardcoded git-remote.
// Used primarily to redeploy gatsby built files on github pages.

var readline = require("readline")
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

var ghpages = require("gh-pages");

(() => {
  console.log(`*****\nInitiating custom deployment script for the digital-hub...\n*****`)
  console.log("Please make sure that you have required access rights (like write access to specific repositories), otherwise the deployment will intentionally fail. The deplyoment process / script is meant for reinherit project admins and developers. Please contact project administation if you have any problems.")

  const GIT_REPO = "https://github.com/ReInHerit/reinherit.github.io.git"
  const BRANCH = "main"

  rl.question(
    "*** Do you want to automatically deploy (the built gatsby files) to the production environment? (y/n)",
    function (answer) {
      if (answer.toLowerCase() === "y") {
        console.log("*** Deploying now gatsby files to: " + GIT_REPO)
        ghpages.publish(
          "public",
          {
            branch: BRANCH,
            repo: GIT_REPO,
          },
          () => {
            console.log("*** Deployment finished")
            console.log(`*****\nEnd of deployment script...\n*****`)
          }
        )
      } else if (answer.toLowerCase() === "n") {
        console.log("Deployment aborted by user...")
        console.log(`*****\nEnd of deployment script...\n*****`)
      } else {
        console.log("You have to answer either with 'y' or 'n'. Aborting deployment...")
      }

      rl.close();
    }
  )
})()
