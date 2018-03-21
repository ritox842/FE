const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

const GIT_REMOTE_NAME = 'origin';
const COMMIT_MESSAGE = 'Updates';

let dest = process.env.PWD.split("/");
dest = dest[dest.length - 1];

const dir = process.env.npm_package_config_github_deploy_source;

/**
 * Since GitHub moved to Jekyll 3.3, their server ignores the "node_modules" and "vendors" folder by default.
 * but, as of now, it also ignores "vendors*" files.
 * This means vendor.bundle.js or vendor.[chunk].bundle.js will return 404.
 * this is the fix for now.
 */
fs.writeFileSync(path.join(dir, '.nojekyll'), '');

const logger = function (msg) {
  console.log(msg);
};

const options = {
  logger,
  dest,
  remote: GIT_REMOTE_NAME,
  message: COMMIT_MESSAGE,
  repo: 'https://github.com/datorama/FE.git',
  dotfiles: true // for .nojekyll
};

ghpages.publish(dir, options, function(err) {
  if (err) {
    console.log(`GitHub deployment done. STATUS: ERROR. ${err}`);
    throw err;
  } else {
    console.log('GitHub deployment done. STATUS: SUCCESS.');
  }
});