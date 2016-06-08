// @flow
import React from 'react'

type State = {
  bar: string
}

/*
 src/es6/ParameterizedStateOnly.js:8
 8: export default class App extends React.Component<void, void, State> {
 ^^^^^ object type. This type is incompatible with
 8: export default class App extends React.Component<void, void, State> {
 ^^^^^ undefined. Did you forget to declare State?
 */
export default class App extends React.Component<void, void, State> {
  render ():?React.Element {
    return <div>Hello World</div>
  }
}
