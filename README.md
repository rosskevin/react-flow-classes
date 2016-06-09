Test repo showing the variations on ES2015 class definitions with flow.

`npm install && npm run flow`


This shows an ES2015/ES6/ES7 parsing bug - it will fail if there isn't a semicolon or static method after property declarations
                                          
```bash
src/es6/Fails.js:20
 20:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier

src/es6/ParameterizedFails.js:20
 20:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier
```                                          