// @flow
import React from 'react'

type State = {
  bar: string
}

/*
 src/es6/StateOnly.js:14
 14:   render ():?React.Element {
 ^^^^^^ Unexpected identifier
 */
export default class App extends React.Component {
  state: State

  render ():?React.Element {
    return <div>Hello World</div>
  }
}
