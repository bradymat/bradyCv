import React, { Component } from 'react'
import Navbar from './navbar'
import About from './About'
import Skills from './skills'
import Experience from './experience'
import Contact from './contact'




class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      navButtons: [
        {id: 0, title: 'Home', href: '#home'},
        {id: 1, title: 'About', href: '#about'},
        {id: 2, title: 'Skills', href: '#skills'},
        {id: 3, title: 'Experience', href: '#experience'},
        {id: 4, title: 'Contact', href: '#contact'}
      ]
    }
  }

  render () {

    return (
    <div>
    <Navbar navButtons={this.state.navButtons}/>
    <About/>
    <Skills/>
    <Experience/>
    <Contact/>

    </div>)
  }

}

export default App
