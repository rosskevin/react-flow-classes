Test repo showing the variations on ES2015 class definitions with flow.

`npm install && npm run flow`


This shows a bug when constructor is used without a static method above it.
                                          
```bash
src/es6/Fails.js:20
 20:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier

src/es6/ParameterizedFails.js:20
 20:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier
```                                          