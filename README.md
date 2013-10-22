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
var promisy = require('promisy');

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
http://shallker.github.io/simple-test/promisy/index.html   
http://shallker.github.io/simple-test/promisy/multi.html   


## License

  MIT