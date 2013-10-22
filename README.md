promisy
==========

A simple .then chaining

## Installation
npm
```bash
npm install promisy
```

component
```bash
component install shallker/promisy
```

## Quick Start
```javascript
var Promisy = require('promisy');
var promisy = new Promisy;

promisy(function (next) {
  console.log('first');
  next();
}).then(function (next) {
  console.log('then 1');
  setTimeout(function () {
    next();
  }, 1000);
}).then(function (next) {
  console.log('then 2')
  setTimeout(function () {
    next();
  }, 1000);
}).then(function (next) {
  console.log('then 3');
});
```

## API

### .then(Function next)

## Test
Browser side   
http://shallker.github.io/promisy/test/index.html   
http://shallker.github.io/promisy/test/multi.html   


## License

  MIT