# umd-lib
Just a small module using UMD, that expose both AMD and CommonJS interfaces.

We are using browserify to bundle this very small lib and his dependencies into one bundle.js that expose both AMD and CommonJS.
Here is the command we uses for creating the bundle:

```bash
browserify src/mylib.js --standalone mylib > src/bundle.js
```

browser/ directory contains a working example of using the lib in a browser.
node/ directory contains a working example of using the lib in NodeJs.

## Test the lib in Node.js using require to load the lib (using the CommonJS interface):

In node/ directory,
```
node nodeTest.js
```
in the console, you will see the expected output.

## Test the lib in a browser using RequireJS to load the lib (using the AMD interface):

Open browser/index.html in a browser, in the console, you will see the expected output.
