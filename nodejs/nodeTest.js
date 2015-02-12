/*eslint-env node*/

var myjsonld = require("../src/mylib");

myjsonld.myfunction().then(function(compactedJsonLd) {
    "use strict";
    console.log(compactedJsonLd);
});
