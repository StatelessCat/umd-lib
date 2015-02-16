/*eslint-env amd, node*/

require.config({
    paths: {
        mylib: "../src/bundle"
    }
});

define(["mylib"], function(mylib) {
    "use strict";
    mylib.myfunction().then(function(res) {
        console.log(res);
    });
});
