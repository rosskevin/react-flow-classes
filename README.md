Test repo showing the variations on ES2015 class definitions with flow.

`npm install && npm run flow`

I've tried many variations trying to get to the right solution, so far, not so good.

I'm taking cues from [flux-utils-todomvc sample app](https://github.com/facebook/flux/blob/master/examples/flux-utils-todomvc/js/components/TodoItem.react.js)...with no luck.

If I am misusing any of these, please let me know.  Some of these may be proper use with one flow bug:
  
```bash
  src/es6/ParameterizedDefaultProps2.js:20
   20:   render ():?React.Element {
         ^^^^^^ Unexpected identifier
```

But I'm not sure.


Here are test cases (errors noted in each file):

Works:
- AllVoid
- ParameterizedPropsOnly - works, but incorrect assignment?


The rest fail:

```bash
~/p/react-flow-classes ❯❯❯ npm run flow                                                                                                                                                                                                                                                                                                             master ✚ ✱ ◼

> react-flow-classes@1.0.0 flow /Users/kross/projects/react-flow-classes
> flow; test $? -eq 0 -o $? -eq 2

src/es6/ParameterizedDefaultProps.js:20
 20: export default class App extends React.Component<DefaultProps, Props, void> {
                                                      ^^^^^^^^^^^^ object type. This type is incompatible with
 20: export default class App extends React.Component<DefaultProps, Props, void> {
                                                      ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?

src/es6/ParameterizedDefaultProps.js:20
 20: export default class App extends React.Component<DefaultProps, Props, void> {
                                                      ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?. This type is incompatible with
 20: export default class App extends React.Component<DefaultProps, Props, void> {
                                                      ^^^^^^^^^^^^ object type

src/es6/ParameterizedDefaultProps2.js:22
 22:   render ():?React.Element {
       ^^^^^^ Unexpected identifier

src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                      ^^^^^^^^^^^^ object type. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                      ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?

src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                      ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                      ^^^^^^^^^^^^ object type

src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                                           ^^^^^ object type. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                                           ^^^^^ undefined. Did you forget to declare State?

src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                                           ^^^^^ undefined. Did you forget to declare State?. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
                                                                           ^^^^^ object type

src/es6/ParameterizedPropsOnly2.js:18
 18:   render ():?React.Element {
       ^^^^^^ Unexpected identifier

src/es6/ParameterizedStateOnly.js:15
 15: export default class App extends React.Component<void, void, State> {
                                                                  ^^^^^ object type. This type is incompatible with
 15: export default class App extends React.Component<void, void, State> {
                                                                  ^^^^^ undefined. Did you forget to declare State?

src/es6/ParameterizedStateOnly.js:15
 15: export default class App extends React.Component<void, void, State> {
                                                                  ^^^^^ undefined. Did you forget to declare State?. This type is incompatible with
 15: export default class App extends React.Component<void, void, State> {
                                                                  ^^^^^ object type

src/es6/ParameterizedStateOnly2.js:16
 16:   render ():?React.Element {
       ^^^^^^ Unexpected identifier

src/es6/PropsOnly.js:18
 18:   render ():?React.Element {
       ^^^^^^ Unexpected identifier


Found 12 errors
```                                                        