// @flow
import React from 'react'

// Taken from https://github.com/facebook/flow/blob/master/tests/new_react/classes.js
// render method added
type DefaultProps = { };
type Props = { x: number };
type State = { y: number };

class Foo extends React.Component {
  props:Props;
  state:State;
  static defaultProps:DefaultProps;

  is_mounted:boolean;

  static bar ():void {}

  qux ():void {
    var _:string = this.props.x;
  }

  constructor (props) {
    super(props);
    this.state = { y: "" };
  }

  setState (o:{ y_: string }):void { }

  componentDidMount ():void {
    this.is_mounted = true;
  }

  componentWillReceiveProps (nextProps:Object,
                             nextContext:any):void {
    this.qux();
  }

  render () {
    return <div>Hello World</div>
  }
}