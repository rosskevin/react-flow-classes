// @flow
import React from 'react'

type DefaultProps = {
  bar: 'baz'
}

type Props = {
  bar: string
}

// FIXME: Is this even the correct parameter?
/*
 src/es6/ParameterizedDefaultProps2.js:20
 20:   render ():?React.Element {
 ^^^^^^ Unexpected identifier
 */
export default class App extends React.Component<DefaultProps, Props, void> {
  defaultProps: DefaultProps
  props: Props

  render ():?React.Element {
    return <div>Hello World</div>
  }
}
