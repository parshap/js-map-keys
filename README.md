# map-keys

Map object keys returning a new object

# Example
```js
var map = require("map-keys");
map({ foo: 2 }, function(val, key, obj) {
  return key + "bar";
});
// -> { foobar: 2 }
```

# Installation
```
npm install map-keys
```
