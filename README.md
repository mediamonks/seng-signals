[![Travis](https://img.shields.io/travis/mediamonks/seng-signals.svg?maxAge=86400)](https://travis-ci.org/mediamonks/seng-signals)
[![Code Climate](https://img.shields.io/codeclimate/github/mediamonks/seng-signals.svg?maxAge=86400)](https://codeclimate.com/github/mediamonks/seng-signals)
[![Coveralls](https://img.shields.io/coveralls/mediamonks/seng-signals.svg?maxAge=86400)](https://coveralls.io/github/mediamonks/seng-signals?branch=master)
[![npm](https://img.shields.io/npm/v/seng-signals.svg?maxAge=86400)](https://www.npmjs.com/package/seng-signals)
[![npm](https://img.shields.io/npm/dm/seng-signals.svg?maxAge=86400)](https://www.npmjs.com/package/seng-signals)

# seng-signals

Signal is a Observer Pattern that works on the basis that every event has its own controller, its more clear what a controller dispatches and its hi-performance.


## Installation

### npm

```sh
npm install --save seng-signals
```

### other

We also have browser, amd, commonjs, umd, systemjs and es6 versions of
this module available attached to the [Github Releases](https://github.com/mediamonks/seng-signals/releases).

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import {Signal, Signal1, Signal2} from 'seng-signals';

var signal = new Signal();
var connection = signal.connect(function(){
	console.log('emitted');
});

signal.emit(); // console.log('emitted');
signal.emit(); // console.log('emitted');
signal.emit(); // console.log('emitted');

// -----

connection.dispose();

var signal = new Signal();
var connection = signal.connect(function(){
	console.log('emitted');
});

connection.once();

signal.emit(); // console.log('emitted');
signal.emit(); // nothing
signal.emit(); // nothing

// -----

var signal = new Signal1();
var connection = signal.connect(function(value){
	console.log('emitted:', value);
});

signal.emit(1); // console.log('emitted:', 1);
signal.emit(2); // console.log('emitted:', 2);
signal.emit(3); // console.log('emitted:', 3);

// -----

var signal = new Signal2();
var connection = signal.connect(function(a, b){
	console.log('emitted:', a, b);
});

signal.emit('apple', 1); // console.log('emitted:', 'apple', 1);
signal.emit('pinapple', 2); // console.log('emitted:', 'apple', 1);

connection.dispose();
signal.disconnectAll();

signal.emit('sugar', 3); // nothing

// -----

var signal = new Signal();
signal.connect(function(a, b){
	console.log('emitted A');
}).once();

// put this listener on top of all others
signal.connect(function(){
	console.log('emitted B');
}, true).once();

signal.emit();

// -----

```

### Usage with Class
This is all hypothetical fetch streaming code, this just gives a example of how to use signals in different setting.
```
class Loader {
  constructor(path){
    this.path = path;
    this.progress = new Signal1();
    this.complete = new Signal();
  }
  
  load(){
    var _this = this;
    fetch(this.path).then(response => {
      var reader = response.body.getReader();
      var bytesReceived = 0;
      var totalBytes = 1000000;
      
    
      reader.read().then(function processResult(result) {

        if (result.done) {
          _this.complete.emit();
          return;
        }
    
        bytesReceived += result.value.length;
        
        _this.progress.emit(bytesReceived/totalBytes);
        return reader.read().then(processResult);
      });
    });
  }
}
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

[MIT](./LICENSE)
