var Promisy = typeof document === 'object' ? require('promisy') : require('../lib/promisy');
var test = require('simple-test');

var promisy1 = new Promisy;
var promisy2 = new Promisy;

test('promisy one', function (done) {
  promisy1(function (next) {
    console.log('promisy1 first');
    next();
  }).then(function (next) {
    console.log('promisy1 then 1');
    setTimeout(function () {
      next();
    }, 500);
  }).then(function () {
    console.log('promisy1 then 2');
    done();
  });
});

test('promisy two', function (done) {
  promisy2(function (next) {
    console.log('promisy2 first');
    next();
  }).then(function (next) {
    console.log('promisy2 then 1');
    setTimeout(function () {
      next();
    }, 500);
  }).then(function () {
    console.log('promisy2 then 2');
    done();
  });
});
