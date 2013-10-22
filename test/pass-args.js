var Promisy = typeof document === 'object' ? require('promisy') : require('../lib/promisy');
var test = require('simple-test');

var promisy = new Promisy;

test('promisy will pass next callback the args given by previouse callback', function (done) {
  var picture = {};

  promisy(function (next) {
    picture.step1 = 'modeling';
    next(picture);
  }).then(function (next, picture) {
    test.eq(picture.step1, 'modeling');
    picture.step2 = 'coloring';
    next(picture);
  }).then(function (next, picture) {
    test.eq(picture.step1, 'modeling');
    test.eq(picture.step2, 'coloring');
    picture.step3 = 'lighting';
    next(picture);
  }).then(function (next, picture) {
    test.eq(picture.step1, 'modeling');
    test.eq(picture.step2, 'coloring');
    test.eq(picture.step3, 'lighting');
    picture.step4 = 'animation';
    next(picture);
  }).then(function (next, picture) {
    test.eq(picture.step1, 'modeling');
    test.eq(picture.step2, 'coloring');
    test.eq(picture.step3, 'lighting');
    test.eq(picture.step4, 'animation');
    done();
  });
});
