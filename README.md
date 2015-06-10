[![npm](https://nodei.co/npm/cancelable-group.png)](https://nodei.co/npm/cancelable-group/)

# cancelable-group

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Create groups of callbacks that can be canceled in one go.

Think [FGRibreau/cancelable] for groups or [substack/node-toss] without timeouts and the extra stuff. This module is focused on one thing.

[FGRibreau/cancelable]: https://github.com/FGRibreau/cancelable
[substack/node-toss]: https://github.com/substack/node-toss

[Travis]: https://travis-ci.org/eush77/cancelable-group
[travis-badge]: https://travis-ci.org/eush77/cancelable-group.svg
[david]: https://david-dm.org/eush77/cancelable-group
[david-badge]: https://david-dm.org/eush77/cancelable-group.png

## Example

```js
var cancelableGroup = require('cancelable-group');

var group = cancelableGroup();

asyncFunction1(arg1, arg2, group(function (err, data) {
  // Won't fire after cancel() call.
}));

asyncFunction2(arg1, arg2, group(function (err, data) {
  // Won't fire after cancel() call.
}));

someOtherFunction(function () {
  // ...
  group.cancel();
}));
```

## API

### `group = cancelableGroup()`

Creates new cancelable group.

### `group(func)`

Returns a wrapper function that is equivalent to `func` unless the group is canceled. Then it becomes a no-op.

### `group()`
### `group.cancel()`

Cancels the group.

## Install

```
npm install cancelable-group
```

## License

MIT
