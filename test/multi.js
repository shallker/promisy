var Promisy = typeof document === 'object' ? require('promisy') : require('../lib/promisy');

var promisy1 = new Promisy;
var promisy2 = new Promisy;

promisy1(function (next) {
  console.log('promisy1 first');
  next();
}).then(function (next) {
  console.log('promisy1 then 1');
  setTimeout(function () {
    next();
  }, 1000);
}).then(function () {
  console.log('promisy1 then 2');
});

promisy2(function (next) {
  console.log('promisy2 first');
  next();
}).then(function (next) {
  console.log('promisy2 then 1');
  setTimeout(function () {
    next();
  }, 1000);
}).then(function () {
  console.log('promisy2 then 2');
});

