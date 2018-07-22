# Change Log

## Unreleased

### Added

- new separate `npm run fmt` and `npm run fmt` scripts

- `npm run fmt` aligns Object values the way `go fmt` does

### Changed

- reduced calls to `npm install` or `npm uninstall`

- combined some tasks to reduce boilerplate, increase determinism

- scan for Flow annotations once, instead of twice or more

## 3.2.0 - 2018-05-26

### Changed

- use `npm audit` over `nsp check` when available

- rely on global `npx` with npm 5.2.x and newer

- flowtype: version flow-bin in devDependencies

- prettier: code-style for Markdown and JSON files

* update [chalk](https://www.npmjs.com/package/chalk) to [2.3.2](https://github.com/chalk/chalk/releases/tag/v2.3.2) (from 2.2.2)

* update [execa](https://www.npmjs.com/package/execa) to 0.10.0 (from 0.9.0)

* update [js-yaml](https://www.npmjs.com/package/js-yaml) to [3.11.0](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md) (from [3.10.0](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md))

* update [load-json-file](https://www.npmjs.com/package/load-json-file) to 5.0.0 (from 4.0.0)

* update [meow](https://www.npmjs.com/package/meow) to 4.0.1 (from [4.0.0](https://github.com/sindresorhus/meow/releases/tag/v4.0.0))

* update [node-fetch](https://www.npmjs.com/package/node-fetch) to [2.1.2](https://github.com/bitinn/node-fetch/releases/tag/v2.1.2) (from [2.0.0](https://github.com/bitinn/node-fetch/releases/tag/v2.0.0))

* update [p-memoize](https://www.npmjs.com/package/p-memoize) to 2.0.0 (from 1.0.0)

* update [semver](https://www.npmjs.com/package/semver) to 5.5.0 (from 5.4.1)

* update [update-notifier](https://www.npmjs.com/package/update-notifier) to [2.5.0](https://github.com/yeoman/update-notifier/releases/tag/v2.5.0) (from 2.3.0)

* update [vinyl-fs](https://www.npmjs.com/package/vinyl-fs) to [3.0.3](https://github.com/gulpjs/vinyl-fs/releases/tag/v3.0.3) (from [3.0.0](https://github.com/gulpjs/vinyl-fs/releases/tag/v3.0.0))

## 3.1.0 - 2018-02-04

### Changed

- use [.prettierignore](https://github.com/prettier/prettier/releases/tag/1.6.0) file instead of a complicated glob

- prettier: trailingComma='all' for Node.js 8+

- update [chalk](https://www.npmjs.com/package/chalk) to 2.2.2 (from 2.1.0)

- update [detect-flowtype](https://www.npmjs.com/package/detect-flowtype) to [2.0.0](https://github.com/jokeyrhyme/detect-flowtype-js/releases/tag/2.0.0) (from [1.0.0](https://github.com/jokeyrhyme/detect-flowtype-js/blob/master/CHANGELOG.md))

- update [execa](https://www.npmjs.com/package/execa) to 0.9.0 (from 0.8.0)

- update [js-yaml](https://www.npmjs.com/package/js-yaml) to [3.10.0](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md) (from [3.9.1](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md))

- update [load-json-file](https://www.npmjs.com/package/load-json-file) to 4.0.0 (from 3.0.0)

- update [log-update](https://www.npmjs.com/package/log-update) to 2.3.0 (from 2.1.0)

- update [meow](https://www.npmjs.com/package/meow) to [4.0.0](https://github.com/sindresorhus/meow/releases/tag/v4.0.0) (from 3.7.0)

- update [node-fetch](https://www.npmjs.com/package/node-fetch) to [2.0.0](https://github.com/bitinn/node-fetch/releases/tag/v2.0.0) (from [1.7.3](https://github.com/bitinn/node-fetch/releases/tag/1.7.3))

- update [read-pkg-up](https://www.npmjs.com/package/read-pkg-up) to 3.0.0 (from 2.0.0)

- update [rimraf](https://www.npmjs.com/package/rimraf) to 2.6.2 (from 2.6.1)

- update [update-notifier](https://www.npmjs.com/package/update-notifier) to 2.3.0 (from [2.2.0](https://github.com/yeoman/update-notifier/releases/tag/v2.2.0))

- update [vinyl-fs](https://www.npmjs.com/package/vinyl-fs) to [3.0.0](https://github.com/gulpjs/vinyl-fs/releases/tag/v3.0.0) (from [2.4.4](https://github.com/gulpjs/vinyl-fs/releases/tag/v2.4.4))

- update [write-json-file](https://www.npmjs.com/package/write-json-file) to 2.3.0 (from 2.2.0)

## 3.0.0 - 2017-09-11

### Changed

- require Node.js 8.x, drop support for older versions

- move .eslintignore into package.json:eslintIgnore

- enable prettier's trailingComma setting in ES5 mode

## 2.3.0 - 2017-07-30

### Added

- install a project-local copy of [`npx`](https://github.com/zkat/npx), which is very useful for executing other CLI tools

- use [`nsp`](https://github.com/nodesecurity/nsp) to check for vulnerable dependencies

### Changed

- run `flow-bin` via `npx`, no longer as a devDep

- run `prettier` via `npx`, no longer as a devDep

- use [`sort-package-json`](https://github.com/keithamus/sort-package-json) via `npx`, instead of `fixpack`

- update [chalk](https://www.npmjs.com/package/chalk) to 2.0.1 (from 1.1.3)

- update [js-yaml](https://www.npmjs.com/package/js-yaml) to [3.9.1](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md) (from [3.8.4](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md))

- update [log-update](https://www.npmjs.com/package/log-update) to 2.1.0 (from 2.0.0)

- update [semver](https://www.npmjs.com/package/semver) to 5.4.1 (from 5.3.0)

- depend upon [latest-version](https://www.npmjs.com/package/latest-version) 3.1.0

### Fixed

- configure `flow` to skip test files within dependencies

## 2.2.4 - 2017-06-18

### Fixed

- `prettier` should skip "flow-typed" and "typings" folders (#157)

## 2.2.3 - 2017-06-18

### Changed

- install `yarn` in CI environments only when needed (#148)

### Fixed

- ignore the exit code from `prettier --list-different ...` (#154)

## 2.2.2 - 2017-06-15

### Fixed

- create new JSON files from scratch (#152)

## 2.2.1 - 2017-06-06

### Fixed

- ensure `prettier` can find target files (#146)

## 2.2.0 - 2017-06-04

### Changed

- update `npm run prettier` options (#146)

### Notes

- not published to NPM due to issue (#146)

## 2.1.0 - 2017-04-25

### Added

- install and configure [jest](https://github.com/facebook/jest) if other test frameworks are absent and `npm test` is not configured

- populate a ".eslintignore" file to configure ESLint

### Changed

- example entry-point "index.js" file no longer enables Flow by default

- move ESLint to "pretest" script, as it may change files (#117)

- dot-ignore files (e.g. .gitignore) use UNIX line-endings

### Removed

- no longer configure test/.eslintrc.json by default

## 2.0.0 - 2017-04-23

### Added

- use [prettier](https://github.com/prettier/prettier) for JavaScript code style

- [recommended React rules for ESLint](https://github.com/yannickcr/eslint-plugin-react) for React projects

### Changed

- update [js-yaml](https://www.npmjs.com/package/js-yaml) to [3.8.3](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md) (from [3.8.2](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md))

- update [log-update](https://www.npmjs.com/package/log-update) to 2.0.0 (from 1.0.2)

### Removed

- [JavaScript SemiStandard Style for ESLint](https://github.com/Flet/eslint-config-semistandard)

- [JavaScript Standard Style for ESLint](https://github.com/feross/eslint-config-standard)

- [JavaScript Standard Style Plugin for ESLint](https://github.com/xjamundx/eslint-plugin-standard)

- [JavaScript Standard JSX Style for ESLint](https://github.com/feross/eslint-config-standard-jsx)

- [JavaScript Standard React Style for ESLint](https://github.com/feross/eslint-config-standard-react)

## 1.11.1 - 2017-04-05

### Fixed

- install missing eslint-plugin-import

## 1.11.0 - 2017-04-04

### Added

- display individual task status during operation

- groundwork for skipping unnecessary tasks

- uninstall Flow when unused (#118)

### Changed

- don't add an NPM badge for private packages

- install Flow only if "@flow" comment is found (#118)

## 1.10.0 - 2017-03-29

### Added

- new safety check for un-versioned changes (via `git status`)

- new `--no-check-git-status` flag to ignore safety check

- ensure package "main" points to file (created for you, if not)

### Changed

- `npm run fixpack` is now part of the "pretest" hook rather than "posttest"

- update [execa](https://www.npmjs.com/package/execa) to 0.6.3 (from 0.6.0)

### Fixed

- support .eslintrc.json file in `test/`, `tests/`, or `__tests__/` instead of always assuming `test/`

## 1.9.1 - 2017-03-06

### Changed

- update [js-yaml](https://www.npmjs.com/package/js-yaml) to [3.8.2](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md) (from [3.7.0](https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md))

- update [update-notifier](https://www.npmjs.com/package/update-notifier) to 2.1.0 (from [1.0.3](https://github.com/yeoman/update-notifier/releases/tag/v1.0.3))

### Fixed

- drop old [greenkeeper-postpublish](https://github.com/greenkeeperio/greenkeeper-postpublish) integration

- drop explicit extends in test/.eslintrc.json

## 1.9.0 - 2017-02-02

### Added

- GitLab CI integration for non-BitBucket non-GitHub projects (#75)

### Fixed

- prevent `npm init -y` from populating "dependencies" (#96)

- fix regression for fresh .eslintrc.json and jsconfig.json files

## 1.8.1 - 2017-02-02

### Changed

- AppVeyor/Travis no longer configured to install type files

  - [version these in your project instead](https://github.com/flowtype/flow-typed#why-do-i-need-to-commit-the-libdefs-that-flow-typed-installs-for-my-project)

- AppVeyor installs and uses the latest NPM (#81)

- update [execa](https://www.npmjs.com/package/execa) to 0.6.0 (from 0.5.0)

- update [update-nodejs-notifier](https://www.npmjs.com/package/update-nodejs-notifier) to [1.1.1](https://github.com/jokeyrhyme/update-nodejs-notifier.js/releases/tag/1.1.1) (from [1.1.0](https://github.com/jokeyrhyme/update-nodejs-notifier.js/releases/tag/1.1.0))

- depend upon [update-json-file](https://www.npmjs.com/package/update-json-file) [1.1.1](https://github.com/jokeyrhyme/update-json-file.js/releases/tag/1.1.1)

### Fixed

- maintain consistent 2-space indents when editing JSON files

## 1.8.0 - 2016-12-20

### Changed

- load tasks in sequence based on metadata, instead of hardcoded order

- use [locate-path](https://github.com/sindresorhus/locate-path) package (#68)

### Fixed

- remove 'node_modules' from Travis CI cache to avoid odd issues

- `node-init` no longer unexpectedly breaks ESLint plugin configuration

- fresh projects no longer cause `TypeError`s to throw (#61)

## 1.7.0 - 2016-11-03

### Added

- Travis CI and AppVeyor (try to) update `npm` itself (#20)

- Travis CI and AppVeyor `npm install --global` [yarn](https://github.com/yarnpkg/yarn), [flow-typed](https://github.com/flowtype/flow-typed), and [typings](https://github.com/typings/typings) (#48)

- Travis CI and AppVeyor test with recommended Node.js versions (#50)

### Fixed

- use AppVeyor badge from [shields.io](https://shields.io) (more reliable) (#34)

## 1.6.0 - 2016-10-26

### Added

- add `npm run ava` if using [ava](https://github.com/avajs/ava)

- add `npm run jest` if using [jest](https://github.com/facebook/jest)

- add `npm run mocha` if using [mocha](https://github.com/mochajs/mocha)

- add `npm run nyc` if using [nyc](https://github.com/istanbuljs/nyc)

- stop execution if user's Node.js version doesn't match our package.json "engines"

- tell users (via [package-engines-notifier](https://github.com/jokeyrhyme/package-engines-notifier.js)) if their Node.js doesn't match our package.json "engines"

- tell users (via [update-nodejs-notifier](https://github.com/jokeyrhyme/update-nodejs-notifier.js)) if the major version of their Node.js is older than the current stable

### Fixed

- no `npm cache clean` instructions for AppVeyor

- install 64-bit Node.js in AppVeyor

- improve detection AppVeyor badge in README.md to avoid duplicates

- flowtype: no more `|| exit 0` in npm script (#42, #43)

## 1.5.0 - 2016-10-19

### Added

- add [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

### Changed

- copy useful bits from [`yarn`'s FlowType settings](https://github.com/yarnpkg/yarn/blob/v0.16.0/.flowconfig)

### Fixed

- add `npm cache clean` to AppVeyor configuration

- no longer cache node_modules in AppVeyor (problematic?)

## 1.4.0 - 2016-08-23

### Added

- add ESLint settings / devDeps for React (if found)

### Changed

- default FlowType configuration ignores ava cache files

- bump devDeps

## 1.3.0 - 2016-08-06

### Added

- add and internally use [FlowType](https://flowtype.org/) (#11)

### Changed

- use [standards-based EditorConfig settings](https://github.com/jokeyrhyme/standard-editorconfig)

- bump deps and devDeps

## 1.2.0 - 2016-06-08

### Added

- add basic jsconfig.json defaults for Visual Studio Code (#9)

### Changed

- use .eslintrc if found, but prefer .eslintrc.json otherwise (#12)

### Fixed

- "eslint:recommended" should be first in .eslintrc.json (#16)

- don't add "standard" to .eslintrc.json if "semistandard" is already there (#17)

## 1.1.0 - 2016-06-07

### Added

- [update-notifier](https://www.npmjs.com/package/update-notifier)

- npm package scope capabilities (#1, #2)

- if npm scope, set publishConfig defaults (#3)

- add NPM version badge to README.md (#8)

- add Travis CI integration and badge (#4)

- add AppVeyor integration and badge (#5)

### Changed

- npm-engines: use faster `process.version`, not `node --version`

- skip `npm install --save-dev` steps if already in devDependencies
