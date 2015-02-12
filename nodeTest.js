/*eslint-env node*/

var myjsonld = require("./mylib.js");

myjsonld.myfunction().then(function(compactedJsonLd) {
    "use strict";
    console.log(compactedJsonLd);
});
