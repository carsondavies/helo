import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '',
      userposts: true
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      userposts: !this.state.userposts
    })
  }
  //still have work to do on getallposts front end and back end
  getAllPosts() {
    axios.get(`/api/posts?userposts=${this.state.userposts}`)
  }

  resetSearch = () => {
    this.setState({
      search: ''
    })
  }



  render() {
    return (
      <div>Dashboard.js
        <input className='search-bar' name='search' placeholder='Search by Title' onChange={(e) => { this.handleChange(e) }} />
        <button className='search-button' onClick={() => { this.getAllPosts(this.state.search) }}>Search</button>
        <button className='reset-search' onClick={() => { this.resetSearch() }}>Reset</button>
        <input type='checkbox' onClick={() => { this.handleClick() }} />
      </div>
    )
  }
}

export default Dashboard