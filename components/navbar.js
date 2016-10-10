import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <div className='bannerImage .col-md-12'>
        <div className='image'><img src='public/images/me.png'/></div>
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
