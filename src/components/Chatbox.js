import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'
import _ from 'lodash'

@observer
class Chatbox extends Component {
  _submit = (event) => {
    event.preventDefault()
    store.addMessage(this.refs.message.value)
    this.refs.message.value = ''
  }

  componentDidUpdate () {
    const element = this.refs.convo
    element.scrollTop = element.scrollHeight
  }

  render () {
    if (store.username) {
      return <div className='messenger'>
        <div className='title'>
          <h3>{store.username} / ...and 3 others</h3>
          <div className='logout'>
            <a href='/' id='x'>&times;</a>
          </div>
        </div>
        <div className='convo' ref='convo'>
          <ul>
            {_.map(store.messages, ({ username, text }, key) =>
              <li key={key}>
                <span className='user'>@{username}:&nbsp;</span>
                <span className='chat'>{text}</span>
              </li>
            )}
          </ul>
        </div>
        <div className='input'>
          <div className='chatcreate'>
            <h5>{store.username}:&nbsp;</h5>
            <form onSubmit={this._submit}>
              <input type='text' ref='message' placeholder='message...' />
            </form>
          </div>
          <button onClick={store.delete}>clear chat</button>
        </div>
      </div>
    } else {
      return <Redirect to='/' />
    }
  }
}

export default Chatbox
