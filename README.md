# amd-lib
Just a small module exposed in UMD using nodeAdapter.js

## In CommonJS Envs, like Node.js,

Install the dependencies:
```
 npm install
```

Use this lib:
```js
var mylib = require("./mylib.js");

mylib.myfunction().then(function(result) {
    "use strict";
    ...
});
```

## In AMD Envs, like a browser using RequireJS,
```
bower install
```

