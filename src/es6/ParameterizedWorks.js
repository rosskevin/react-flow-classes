// @flow
import React from 'react'

type DefaultProps = { x: 1 }
type Props = { x: number }
type State = { y: number }

class Foo extends React.Component<DefaultProps, Props, State> {
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