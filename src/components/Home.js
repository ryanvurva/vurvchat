import React, { Component } from 'react'
// import _ from 'lodash'
// import db from './db'

class Home extends Component {
  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.username
    console.log(input.value)
    input.value = ''
  }
  render () {
    return <div className='home'>
      <div>
        <p>some stuff</p>
      </div>
      <form onSubmit={this._submit}><input type='text' placeholder='username:' ref='username' /></form>
    </div>
  }
}

export default Home
