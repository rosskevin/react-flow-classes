// @flow
import React from 'react'

// Taken from https://github.com/facebook/flow/blob/master/tests/new_react/classes.js
// - render method added
// - convert errors to make it pass...maybe?

type DefaultProps = { x: 1 }
type Props = { x: number }
type State = { y: number }

class Foo extends React.Component<DefaultProps, Props, State> {
  props:Props
  state:State
  static defaultProps:DefaultProps

  // fails without this static method above constructor
  //static bar ():void {}

  constructor (props) {
    super(props)
  }

  render () {
    return <div>Hello World</div>
  }
}