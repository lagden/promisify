# lagden-promisify [![NPM version](https://img.shields.io/npm/v/lagden-promisify.svg)](https://www.npmjs.com/package/lagden-promisify)
[![Build Status](https://travis-ci.org/lagden/promisify.svg?branch=master)](https://travis-ci.org/lagden/promisify)
[![Coverage Status](https://coveralls.io/repos/lagden/promisify/badge.svg?branch=master&service=github)](https://coveralls.io/github/lagden/promisify?branch=master)
[![Dependency Status](https://david-dm.org/lagden/promisify.svg)](https://david-dm.org/lagden/promisify)
[![devDependency Status](https://david-dm.org/lagden/promisify/dev-status.svg)](https://david-dm.org/lagden/promisify#info=devDependencies)

> Convert callback to promise


## Install

```
$ npm i lagden-promisify --save
```


## Usage

```javascript
const fs = require('fs');
const promisify = require('lagden-promisify');

const readFile = promisify(fs.readFile);

readFile('./sample.txt')
  .then(data => {
    console.log(data)
  });
```


## License

MIT © [Thiago Lagden](http://lagden.in)
