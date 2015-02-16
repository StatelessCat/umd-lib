/*eslint-env node*/
"use strict";

 function myfunction() {
     var jsonld = require("jsonld");

     var promises = jsonld.promises;
     var doc = {
         "http://schema.org/name": "Manu Sporny",
         "http://schema.org/url": {"@id": "http://manu.sporny.org/"},
         "http://schema.org/image": {"@id": "http://manu.sporny.org/images/manu.png"}
     };
     var context = {
         "name": "http://schema.org/name",
         "homepage": {"@id": "http://schema.org/url", "@type": "@id"},
         "image": {"@id": "http://schema.org/image", "@type": "@id"}
     };

     var promise = promises.compact(doc, context);
     return promise;
}

module.exports = {
    myfunction: myfunction
};
