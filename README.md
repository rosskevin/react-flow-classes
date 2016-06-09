# Test Repo for [flow/issues#1908](https://github.com/facebook/flow/issues/1908)

This shows an ES2015/ES6/ES7 parsing bug - it will fail if there isn't a semicolon or static method after property declarations and before the first member method.

`npm install && npm run flow`

```bash
src/es6/Fails.js:16
 16:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier

src/es6/FooFails.js:14
 14:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier

src/es6/ParameterizedFails.js:16
 16:   constructor (props) {
       ^^^^^^^^^^^ Unexpected identifier


Found 3 errors
```                                      
    
## flowconfig

Same results with and without the following:

```
esproposal.class_static_fields=enable
esproposal.class_instance_fields=enable
```    