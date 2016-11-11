[![Travis](https://img.shields.io/travis/mediamonks/seng-signals.svg?maxAge=86400)](https://travis-ci.org/mediamonks/seng-signals)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-signals.svg?maxAge=86400)](https://codeclimate.com/github/mediamonks/seng-signals)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-signals.svg?maxAge=86400)](https://coveralls.io/github/mediamonks/seng-signals?branch=master)
[![npm](https://img.shields.io/npm/v/seng-signals.svg?maxAge=86400)](https://www.npmjs.com/package/seng-signals)
[![npm](https://img.shields.io/npm/dm/seng-signals.svg?maxAge=86400)](https://www.npmjs.com/package/seng-signals)

# signals

Add a description here...


## Installation

### npm

```sh
npm i -S seng-signals
```

### other

We also have browser, amd, commonjs, umd, systemjs and es6 versions of
this module available attached to the [Github Releases](https://github.com/mediamonks/seng-signals/releases).

<!---

Note: The below cannot be used yet, as there is no way to link to a
specific version yet without updating this readme manually after each
new version.


### browser

```html
<script src="http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/seng-signals.min.js"></script>
```
```js
console.log(window.SengSignals)
```

### other

Besides the browser version, there are other versions available for
download as well:

- [browser](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals.min.js))
- [umd](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals.js) (and [minified](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals-umd.min.js))
- [amd](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals-amd.js)
- [commonjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals-commonjs.js)
- [systemjs](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals-system.js)
- [es6](http://mediamonks-development.s3.amazonaws.com/seng/libs/signals/1.2.0/signals-es6.zip)

-->

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import SengBoilerplate from 'signals';
// import SengBoilerplate from 'signals/lib/classname';

// do something with SengBoilerplate
```


## Documentation

View the [generated documentation](https://rawgit.com/mediamonks/seng-signals/master/doc/typedoc/index.html).


## Building

In order to build signals, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/mediamonks/seng-signals.git
```

Change to the signals directory:
```sh
cd seng-signals
```

Install dev dependencies:
```sh
npm install
```

Use one of the following main scripts:
```sh
npm run build           # build this project
npm run dev             # run dev-watch mode, seving example/index.html in the browser
npm run generate        # generate all artifacts (compiles ts, webpack, docs and coverage)
npm run test-unit       # run the unit tests
npm run validate        # runs validation scripts, including test, lint and coverage check
npm run lint            # run tslint on this project
npm run doc             # generate typedoc documentation
npm run typescript-npm  # just compile the typescript output used in the npm module
```

When installing this module, it adds a pre-push hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.

If you want to create the distribution files yourself, you can run the
`build-dist` script, and the following files will get generated in the
`dist` folder:

- **/dist/seng-signals.js**: bundled with webpack, can be loaded from
	a script tag, available as `window.SengSignals`
- **/dist/seng-signals.min.js**: same as above, but minified
- **/dist/seng-signals-amd.js**: bundled with webpack, can be used
	with e.g. requirejs
- **/dist/seng-signals-commonjs.js**: bundled with webpack, can be
	used in systems that support commonjs, but you should just use npm
- **/dist/seng-signals-umd.js**: bundled with webpack, works in the
	browser, with requirejs, and in a commonjs system
- **/dist/seng-signals-umd.min.js**: same as above, but minified
- **/dist/seng-signals-system.js**: bundled with typescript, can be
	used in systems	that support systemjs
- **/dist/seng-signals-es6.zip**: transpiled with typescript, only
	types are removed from the source files

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © MediaMonks


## About this boilerplate

**Remove this section when cloning this boilerplate to a real project!**

### Folders

This boilerplate contains the following folders:
* **/config** - Contains the config files for karma and webpack
* **/coverage** - Contains the generated test code coverage, is sent to Code
Climage and Coveral.io.
* **/dist** - Contains the compiled code in different forms for manual usage.
* **/doc** - Can contain additional documentation.
* **/docs/typedoc/** - Contains the generated documentation by typedoc.
* **/example** - Can contain additional examples on how to use this module.
* **/lib** - Contains the built code from `src/lib`, will be published to npm.
* **/node_modules** - Contains the node modules generated by running `npm i`.
* **/script** - Contains scripts being called from npm scripts.
* **/src** - Contains the source code.
* **/test** - Contains the tests.
* **/vendor** - Can contain 3rd party code used in this project, when not
available on npm.

### Files

This boilerplate contains the following files:
* **/config/karma.conf.js** - Configuration for Karma test runner.
* **/config/webpack.conf.js** - Configuration for Webpack builds.
* **/script/webpack.js** - Creates all the different webpack dist builds.
* **.codeclimate.yml** - The Code Climate configuration for this project.
* **.editorconfig** - Defines general formatting rules.
* **.gitignore** - These files should not end up in git.
* **.npmignore** - These files should not end up in npm.
* **.travis.yml** - Configuration for Travis CI.
* **AUTHORS.md** - Contains a list of all the authors that worked on this module.
* **CONTRIBUTING.md** - Contains information on how to contribute on this project.
* **index.d.ts** - The built Typescript definitions, referenced in the package.json.
Will be published to npm.
* **index.d.ts** - The built Typescript index, referenced in the package.json.
Will be published to npm.
* **LICENSE** - Our license file.
* **package.json** - To list the npm package information, all the dependencies,
and contains all the scripts that can be run.
* **README.MD** - This file, remove the about section when cloning this boilerplate.
* **tsconfig.json** - The TypeScript configuration file for this project.
* **/test/tsconfig.json** - The TypeScript configuration file for the tests.
* **tslint.json** - The linting rules for our TypeScript code.

### TypeScript

Todo: describe TypeScript configuration and usage.

### Karma

Todo: describe Karma configuration and usage.

### TSLint

Todo: describe TSLint configuration and usage.

### TypeDoc

Todo: describe TypeDoc configuration and usage.

### Travis

This project uses [Travis](https://travis-ci.org) to build, test and
publish its code to npm. Travis is free for public Github repositories.

It runs on all commits, shows the build status for pull requests, and
publishes to npm when a new tag/release is created.

Travis only runs the `npm test` script, so have configured that script
to run everything we want Travis to check. Besides the unit tests, we
also run our validations and linters.

The travis configuration is placed in a `.travis.yml` file, consisting
of multiple sections.

1.  Defines the `node_js` [language](https://docs.travis-ci.com/user/languages/javascript-with-nodejs),
    and tells travis on which node versions to run the process.
2.  Before running, it needs to install some global dependencies, and
    when it processes some coverage results.
3.  It can do a [npm deploy](https://docs.travis-ci.com/user/deployment/npm),
    telling it to keep the generated artifacts and only publish when run
    on node 4 and when a tag was committed. It also contains the email
    address and api key of the npm user.
4.  Code Climate has a [travis plugin](https://docs.travis-ci.com/user/code-climate/)
    that automatically uploads the code coverage results.

Because we want to keep the npm api key secret, we generate a secure
token with the [Travis Client](https://github.com/travis-ci/travis.rb),
a CLI written in ruby.

Before we can do this, we must make sure that the repository is added
to Travis, because Travis needs the repository owner/name info to make
sure the encrypted values only work for that repository.

1.  First you need to [login](https://github.com/travis-ci/travis.rb#login)
    with your travis account:

    ```sh
    $ travis login
    ```

    To verify that you are logged in correctly you can check:

    ```sh
    $ travis whoami
    ```

2.  Then make sure you are logged in to your npm account with the
    [adduser](https://docs.npmjs.com/cli/adduser) command:

    ```sh
    $ npm adduser
    ```

    To verify that you are logged in correctly you can check:

    ```sh
    $ npm whoami
    ```

3.  Now we need to grab your auth token so we can encrypt it:

    ```sh
    $ cat ~/.npmrc

    # outputs:
    //registry.npmjs.org/:_authToken=<your_auth_token>
    ```

4.  Then let's encrypt that token using the travis [encrypt](https://github.com/travis-ci/travis.rb#encrypt)
    command:

    ```sh
    $ travis encrypt <your_auth_token>
    Detected repository as mediamonks/seng-signals, is this correct? |yes|
    Please add the following to your .travis.yml file:

      secure: "YcN...Zb="
    ```

    Now copy that last line, paste it into your `.travis.yml`, and make
    sure it looks something like this:

    ```yml
    deploy:
      provider: npm
      email: "john@doe.com"
      api_key:
        secure: "YcN...Zb="
    ```

### Code Climate

Todo: describe Code Climate configuration and usage.

### Coverall

Todo: describe Coverall configuration and usage.

### NPM

Todo: describe NPM configuration and usage.
