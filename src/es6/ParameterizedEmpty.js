// @flow
import React from 'react'

type DefaultProps = {}

type Props = {}

type State = {}

/*
 src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^^^^^^^^ object type. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?

 src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^^^^^^^^ undefined. Did you forget to declare DefaultProps?. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^^^^^^^^ object type

 src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^ object type. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^ undefined. Did you forget to declare State?

 src/es6/ParameterizedEmpty.js:11
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^ undefined. Did you forget to declare State?. This type is incompatible with
 11: export default class App extends React.Component<DefaultProps, Props, State> {
 ^^^^^ object type
 */
export default class App extends React.Component<DefaultProps, Props, State> {
  render ():?React.Element {
    return <div>Hello World</div>
  }
}
