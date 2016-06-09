// @flow
import React from 'react'

// Same sample from flow, just constructor moved up.
type DefaultProps = { x: 1 }
type Props = { x: number }
type State = { y: number }

class Foo extends React.Component {
  props:Props
  state:State
  static defaultProps:DefaultProps

  constructor (props) {
    super(props)
    this.setState({ y: 2 })
  }

  is_mounted:boolean

  static bar ():void {}

  qux ():void {
    const xx :number = this.props.x
  }

  setState (o:{ y: number }):void { }

  componentDidMount ():void {
    this.is_mounted = true
  }

  componentWillReceiveProps (nextProps:Object,
                             nextContext:any):void {
    this.qux()
  }

  render () {
    return <div>Hello World</div>
  }
}