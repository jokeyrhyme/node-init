/* @flow */
'use strict';

const omit = require('lodash.omit');
const path = require('path');
const updateJsonFile = require('update-json-file');

const { removeScript } = require('../pkg.js');
const { JSON_OPTIONS, PACKAGE_JSON } = require('../values.js');

const LABEL = 'npm scripts configured';

/* :: import type { TaskOptions } from '../types.js' */

function ava(pkg) {
  const scripts = {};
  if (pkg.devDependencies.ava) {
    scripts.ava = 'ava';

    if (pkg.devDependencies.nyc) {
      scripts.ava = 'nyc ava';
      scripts.nyc = 'nyc check-coverage';
    }
  }
  return scripts;
}

const fmt = () => ({
  fmt: 'npm run sort-package-json',
  pretest: 'npm run fmt',
  'sort-package-json': 'npx -q sort-package-json',
});

function fn({ cwd } /* : TaskOptions */) {
  return updateJsonFile(
    path.join(cwd, 'package.json'),
    pkg => {
      // a temporary copy of pkg that requires fewer checks
      const safePkg = {
        devDependencies: pkg.devDevendencies || {},
        ...pkg,
      };

      pkg.scripts = {
        ...ava(safePkg),
        ...fmt(),
        ...(pkg.scripts || {}),
      };

      pkg.scripts = omit(pkg.scripts, [
        // drop fixpack
        'fixpack',
      ]);
      removeScript(pkg, 'posttest', 'npm run fixpack');

      return pkg;
    },
    JSON_OPTIONS,
  );
}

module.exports = {
  fn,
  id: path.basename(__filename),
  label: LABEL,
  requires: [PACKAGE_JSON],
};
