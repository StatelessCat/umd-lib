/*eslint-env node*/

//var mylib = require("../src/mylib"); // Working
var mylib = require("../src/bundle"); // Working

mylib.myfunction().then(function(jsonld) {
    "use strict";
    console.log(jsonld);
});
