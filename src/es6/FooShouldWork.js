// @flow
import React from 'react'

// Taken from https://github.com/facebook/flow/blob/master/tests/new_react/classes.js
// - render method added
// - convert errors to make it pass...maybe?

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
    var _:number = this.props.x;
  }

  constructor (props) {
    super(props);
    this.setState({ y: 2 });
  }

  setState (o:{ y: number }):void { }

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