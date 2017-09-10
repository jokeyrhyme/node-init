/* @flow */
'use strict';

const path = require('path');

const execa = require('execa');
const updateJsonFile = require('update-json-file');

const {
  addScript,
  getPkg,
  isReactProject,
  removeScript,
} = require('../pkg.js');
const {
  JSON_OPTIONS,
  PACKAGE_JSON,
  PACKAGE_JSON_DEVDEPS,
} = require('../values.js');

const LABEL = 'ESLint installed and configured';

const ESLINT_PACKAGES = [
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
];

const ESLINT_REACT_PACKAGES = ['eslint-plugin-react'];

function npmInstall(cwd) {
  return getPkg(cwd).then(pkg => {
    let packages = [].concat(ESLINT_PACKAGES);
    if (isReactProject(pkg)) {
      packages = packages.concat(ESLINT_REACT_PACKAGES);
    }
    const devDeps = Object.keys(pkg.devDependencies || {});
    if (!packages.every(name => devDeps.includes(name))) {
      return execa('npm', ['install', '--save-dev', ...packages], { cwd });
    }
  });
}

function npmScript(cwd) {
  return updateJsonFile(
    path.join(cwd, 'package.json'),
    pkg => {
      addScript(pkg, 'eslint', 'eslint --fix --cache .');

      // call ESLint from "pretest", because `--fix` may change files
      addScript(pkg, 'pretest', 'npm run eslint');

      // do not call ESLint from "posttest" or "test"
      removeScript(pkg, 'posttest', 'npm run eslint');
      removeScript(pkg, 'test', 'npm run eslint');

      return pkg;
    },
    JSON_OPTIONS
  );
}

function npmUninstall(cwd) {
  const standardStylePackages = [
    'eslint-config-semistandard',
    'eslint-config-standard',
    'eslint-config-standard-jsx',
    'eslint-config-standard-react',
    'eslint-plugin-standard',
  ];

  return execa('npm', ['uninstall', '--save-dev', ...standardStylePackages], {
    cwd,
  });
}

/* :: import type { TaskOptions } from '../types.js' */

function fn({ cwd } /* : TaskOptions */) {
  return npmUninstall(cwd)
    .then(() => npmInstall(cwd))
    .then(() => npmScript(cwd));
}

module.exports = {
  fn,
  id: path.basename(__filename),
  label: LABEL,
  provides: [PACKAGE_JSON_DEVDEPS],
  requires: [PACKAGE_JSON],
};
