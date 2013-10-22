var Promisy = typeof document === 'object' ? require('promisy') : require('../lib/promisy');
var test = require('simple-test');

var promisy = new Promisy;

test('promisy will call next callback asynchronously', function (done) {
  var picture = {};
  var i = 0;

  promisy(function (next) {
    next();
    i++;
    test.eq(i, 1);
    console.log(i, 'see me first');
  }).then(function (next) {
    next();
    i++;
    test.eq(i, 2);
    console.log(i, 'see me second');
  }).then(function (next) {
    i++;
    test.eq(i, 3);
    console.log(i, 'see me third');
    done();
  });
});
