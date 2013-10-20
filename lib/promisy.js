module.exports = function Promisy() {
  var callbacks = [];
  var before = {};

  function promisy(fn) {
    var isFirst = false;

    function next() {
      if (callbacks.length === 0) return;
      callbacks.shift().call(before, next);
    }

    callbacks.push(fn);
    if (callbacks.length === 1) isFirst = true;

    setTimeout(function () {
      if (isFirst) before = callbacks.shift().call({}, next);
    }, 1);

    return promisy;
  }

  promisy.then = promisy;

  return promisy;
};
