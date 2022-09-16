import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Online chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar