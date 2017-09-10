/* @flow */
'use strict';

const path = require('path');

const execa = require('execa');
const updateJsonFile = require('update-json-file');

const { addScript } = require('../pkg.js');
const {
  JSON_OPTIONS,
  PACKAGE_JSON,
  PACKAGE_JSON_DEVDEPS
} = require('../values.js');

const LABEL = 'prettier installed and configured';

// we now rely on `npx` for this, instead of devDeps
function npmUninstall(cwd) {
  return execa('npm', ['uninstall', '--save-dev', 'prettier'], { cwd });
}

function npmScript(cwd) {
  return updateJsonFile(
    path.join(cwd, 'package.json'),
    pkg => {
      pkg.scripts = pkg.scripts || {};
      pkg.scripts.prettier =
        'npx -q prettier --list-different --write "{,!(build|coverage|dist|flow-typed|typings|vendor)/**/}*.{css,js,jsx,less,scss,ts,tsx}" || exit 0';

      addScript(pkg, 'pretest', 'npm run prettier');

      pkg.prettier = {
        singleQuote: true,
        trailingCommas: 'es5'
      };

      return pkg;
    },
    JSON_OPTIONS
  );
}

/* :: import type { TaskOptions } from '../types.js' */

function fn({ cwd } /* : TaskOptions */) {
  return npmUninstall(cwd).then(() => npmScript(cwd));
}

module.exports = {
  fn,
  id: path.basename(__filename),
  label: LABEL,
  provides: [PACKAGE_JSON_DEVDEPS],
  requires: [PACKAGE_JSON]
};
