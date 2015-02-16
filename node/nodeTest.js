/*eslint-env node*/

// var myjsonld = require("../src/mylib"); // Working
var myjsonld = require("../src/bundle"); // Not Working

myjsonld.myfunction().then(function(jsonld) {
    "use strict";
    console.log(jsonld);
});
