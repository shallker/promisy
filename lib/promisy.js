var slice = Array.prototype.slice;

module.exports = function Promisy() {
  var callbacks = [];

  function promisy(fn) {
    var isFirst = false;

    callbacks.push(fn);

    if (callbacks.length === 1) {
      isFirst = true;
    }

    setTimeout(function () {
      if (isFirst) {
        callbacks.shift().call({}, next);
      }
    }, 1);

    function next(args) {
      args = slice.call(arguments);
      args.unshift(next);

      if (callbacks.length === 0) {
        return;
      }

      callbacks.shift().apply({}, args);
    }

    return promisy;
  }

  promisy.then = promisy;

  return promisy;
};
