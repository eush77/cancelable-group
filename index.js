'use strict';


module.exports = function () {
  var functions = [];
  var getFunctionByIndex = function (index) {
    return group.canceled
      ? Function.prototype
      : functions[index];
  };

  var group = function (func) {
    if (!func) {
      return group.cancel();
    }

    var index = functions.push(func) - 1;

    return function () {
      return getFunctionByIndex(index).apply(this, arguments);
    };
  };

  group.cancel = function () {
    group.canceled = true;
  };

  return group;
};
