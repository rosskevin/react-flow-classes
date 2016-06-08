// @flow
import React from 'react'

type State = {
  bar: string
}

/*
 src/es6/ParameterizedStateOnly2.js:11
 11:   render ():?React.Element {
 ^^^^^^ Unexpected identifier
 */
export default class App extends React.Component<void, void, State> {
  state: State

  render ():?React.Element {
    return <div>Hello World</div>
  }
}
