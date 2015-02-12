/*eslint-env AMD*/

/*eslint-disable */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', '../browser/bower_components/jsonld/js/jsonld'], function (exports, jsonld) {
            factory((root.commonJsStrictGlobal = exports), jsonld);
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('../nodejs/node_modules/jsonld'));
    } else {
        // Browser globals
        factory((root.commonJsStrictGlobal = {}), root.jsonld);
    }
/*eslint-enable */
}(this, function (exports, jsonld) {
    "use strict";

    //use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
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
}));
