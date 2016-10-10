import React from 'react'
import Headroom from 'react-headroom'

const Navbar = (props) => {
  return (
    <div>
      <div className='bannerImage .col-md-12' id='home'>
        <div className='image'><a href='#home'><img src='https://s.gravatar.com/avatar/b7c8db5fd09d5273b798e8eb17122808?size=496&default=retro'/></a></div>
        <div className='name .col-md-4'><h1>Brady Gillies</h1><h2>Junior Web Developer</h2></div>
      </div>
      <div className='navbar .col-md-4'>
        {
          props.navButtons.map(function (button) {
            return <div className='navButton' key={button.id}><a href={button.href}>{button.title}</a></div>
          })
        }
      </div>
    </div>)
}

export default Navbar
