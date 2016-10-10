import React, { Component } from 'react'
import Navbar from './navbar'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      navButtons: [
        {id: 0, title: 'Home', href: '#'},
        {id: 1, title: 'Skills', href: '#'},
        {id: 2, title: 'Experience', href: '#'},
        {id: 3, title: 'Contact', href: '#'}
      ]
    }
  }

  render () {

    return (
    <div>
    <Navbar navButtons={this.state.navButtons}/>
    <h1>Welcome to {this.props.name}</h1>
    </div>)
  }

}

export default App
