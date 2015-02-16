/*eslint-env node*/
"use strict";

 function myfunction() {
     var N3 = require("n3");

     return new Promise(function (resolve) {
         //noinspection Eslint
         var parser = N3.Parser();
         var accumulator = [];

         parser.parse("@prefix c: <http://example.org/cartoons#>.\n" +
             "c:Tom a c:Cat.\n" +
             "c:Jerry a c:Mouse;\n" +
             "        c:smarterThan c:Tom.",
             function (error, triple) {
                 if (!triple) {
                    resolve(accumulator);
                 } else {
                     accumulator.push(triple);
                 }
             });
     });
}

module.exports = {
    myfunction: myfunction
};
