promisy
==========

A simple .then chaining


## Installation
```bash
npm install promisy
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


## License

  MIT