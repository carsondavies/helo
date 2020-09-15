import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../../dux/reducer'

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    const { username, password } = this.state
    console.log('login hit')
    axios.post('/auth/login', { username, password }).then(res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
  }

  register = () => {
    const { username, password } = this.state
    axios.post('/auth/register', { username, password }).then(res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
  }

  render() {
    return (
      <div className='auth-container'>Auth.js
        <div className='auth-logos'>

        </div>
        <div className='input-boxes'>
          <span>Username:</span>
          <input
            placeholder='enter username'
            name='username'
            onChange={(e) => {
              this.handleChange(e)
            }} />
          <span>Password:</span>
          <input
            placeholder='password'
            type='password'
            name='password'
            onChange={(e) => {
              this.handleChange(e)
            }} />
        </div>
        <div className='button-container'>
          <button onClick={() => { this.login() }}>Login</button>
          <button onClick={() => { this.register() }}>Register</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Auth)