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
 src/es6/ParameterizedDefaultProps.js:20
 20: export default class App extends React.Component<DefaultProps, Props, void> {
 ^^^^^^^^^^^^ object type. This type is incompatible with
 20: export default class App extends React.Component<DefaultProps, Props, void> {
 ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?
 */
export default class App extends React.Component<DefaultProps, Props, void> {
  render ():?React.Element {
    return <div>Hello World</div>
  }
}
