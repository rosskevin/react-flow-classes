// @flow
import React from 'react'

type Props = {
  routes: Object,
  history: Object,
  foo: Object
}

export default class App extends React.Component<void, Props, void> {
  render ():?React.Element {
    return <div>Hello World</div>
  }
}
