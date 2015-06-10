'use strict';

var cancelableGroup = require('..');

var test = require('tape');


test(function (t) {
  t.plan(1);
  var group = cancelableGroup();
  group(t.pass.bind(t))();
  process.nextTick(group(t.fail.bind(t)));
  group.cancel();
});


test('shortcut syntax', function (t) {
  var group = cancelableGroup();
  process.nextTick(group(t.fail.bind(t)));
  group();
  t.end();
});
