// @flow
import React from 'react'

// Taken from https://github.com/facebook/flow/blob/master/tests/new_react/classes.js
// - render method added
// - convert errors to make it pass

type DefaultProps = { x: 1 }
type Props = { x: number }
type State = { y: number }

class Foo extends React.Component {
  props:Props
  state:State
  static defaultProps:DefaultProps

  static bar ():void {}

  constructor (props) {
    super(props)
  }

  render () {
    return <div>Hello World</div>
  }
}