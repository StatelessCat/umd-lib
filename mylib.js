/*eslint-env AMD*/

/*eslint-disable */
if (typeof exports === 'object' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}
/*eslint-enable */

define(function (require, exports) {
    "use strict";

    var jsonld = require("jsonld");

    exports.myfunction = function() {

        // use the promises API
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
    };
});
