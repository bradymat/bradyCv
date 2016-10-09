import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div className='bannerImage'>
        <div className='image'></div>
        <div className='name'></div>
        <div className='nameText'><h1>Brady Gillies</h1><h2>Junior Web Developer</h2></div>
      </div>
      <div className='navbar'>
        <div className='navButton'><a href='#'>Home</a></div>
        <div className='navButton'><a href='#'>Skills</a></div>
        <div className='navButton'><a href='#'>Experience</a></div>
        <div className='navButton'><a href='#'>Contact</a></div>
      </div>
    </div>)
}

export default Navbar
