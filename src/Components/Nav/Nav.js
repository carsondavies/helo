import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {

  console.log(props)
  return (
    <div className='nav-container'>
      <div>{props.username.profilePicture}
        {props.username.username}</div>
      <Link to='/dashboard' className='nav-home-button'>Home</Link>
      <Link to='/new' className='new-post-button'>New Post</Link>
      <Link to='/' className='logout-button'>Logout</Link>
    </div>
  )
}


function mapStateToProps(reduxState) {
  const { username, profilePicture } = reduxState
  return { username, profilePicture }
}

export default connect(mapStateToProps)(Nav)