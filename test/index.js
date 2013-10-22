var Promisy = typeof document === 'object' ? require('promisy') : require('../lib/promisy');
var test = require('simple-test');
var promisy = new Promisy;

test('promisy', function (done) {
  promisy(function (next) {
    console.log('first');
    next();
  }).then(function (next) {
    console.log('then 1');
    setTimeout(function () {
      next();
    }, 1000);
  }).then(function (next) {
    console.log('then 2');
    setTimeout(function () {
      next();
    }, 1000);
  }).then(function (next) {
    console.log('then 3');
    done();
  });
});
