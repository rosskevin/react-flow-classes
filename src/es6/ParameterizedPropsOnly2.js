// @flow
import React from 'react'

type Props = {
  routes: Object,
  history: Object,
  foo: Object
}

/*
 src/es6/ParameterizedPropsOnly2.js:13
 13:   render ():?React.Element {
 ^^^^^^ Unexpected identifier
 */
export default class App extends React.Component<void, Props, void> {
  props: Props

  render ():?React.Element {
    return <div>Hello World</div>
  }
}
