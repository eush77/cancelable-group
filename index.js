'use strict';


module.exports = function () {
  var group = function (func) {
    if (!func) {
      return group.cancel();
    }

    return function () {
      if (!group.canceled) {
        return func.apply(this, arguments);
      }
    };
  };

  group.cancel = function () {
    group.canceled = true;
  };

  return group;
};
