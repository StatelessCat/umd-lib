# umd-lib
Just a small module using UMD, that expose both AMD and CommonJS interfaces.

browser/ directory contains a working example of using the lib in a browser.
nodejs/ directory contains a working example of using the lib in NodeJs.

## Test the lib in Node.js using require to load the lib (using the CommonJS interface):

Install the dependencies:
```
cd nodejs && npm install
```

In nodejs directory,
```
node nodeTest.js
```
in the console, you will see the expected output.


## Test the lib in a browser using RequireJS to load the lib (using the AMD interface):

Install the dependencies:
```
cd browser && bower install
```

Open browser/index.html in a browser, in the console, you will see the expected output.

