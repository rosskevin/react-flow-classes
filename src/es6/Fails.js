// @flow
import React from 'react'

type DefaultProps = { x: 1 }
type Props = { x: number }
type State = { y: number }

class Foo extends React.Component {
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