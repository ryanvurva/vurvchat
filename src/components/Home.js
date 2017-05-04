import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class Home extends Component {
  _submit = (event) => {
    event.preventDefault()
    store.username = this.refs.username.value
    this.props.history.push('/chat')
  }
  render () {
    return <div className='home'>
      <div>
        <p>Log In:</p>
      </div>
      <form onSubmit={this._submit}>
        <input type='text' placeholder='"username"' ref='username' />
      </form>
    </div>
  }
}

export default Home
