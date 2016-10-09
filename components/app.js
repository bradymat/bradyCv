import React, { Component } from 'react'
import Navbar from './navbar'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
    <div>
    <Navbar/>
    <h1>Welcome to {this.props.name}</h1>
    </div>)
  }

}

export default App
