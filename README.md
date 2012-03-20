# _ld_ for Node.js by [@tonylukasavage](https://twitter.com/#!/tonylukasavage)

_*ld*_ is a [Node.js](http://nodejs.org/) package for computing the [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) between 2 strings. 

## Video Demonstration

Coming soon...

## Installation

`npm install ld`

## Basic Usage

You can run the extremely simple test case by executing `node test/test.js STR1 STR2` or use the code below to do the same.

```javascript
var ld = require('ld');
console.log(ld.computeDistance(process.argv[2], process.argv[3]));
```