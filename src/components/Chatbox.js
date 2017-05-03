import React, { Component } from 'react'
import _ from 'lodash'
import db from './db'

class Chatbox extends Component {
  state = {
    items: {}
  }

  componentDidMount () {
    db.ref('items').on('value', (snapshot) => {
      this.setState({
        items: snapshot.val()
      })
    })
  }

  addItem (text) {
    db.ref('items').push().set({ text, completed: false })
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.message
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className='messenger'>
      <div className='title'>
        <h3>Title/People in Chat/Stuff</h3>
        <button>&times;</button>
      </div>
      <div className='convo'>
        {_.map(this.state.items, ({ completed, text }, key) =>
          <p className='chat'>UserName: {text}</p>
        )}
      </div>
      <div className='input'>
        <h5>username:</h5>
        <form onSubmit={this._submit}>
          <input type='text' ref='message' placeholder='message' />
        </form>
      </div>
    </div>
  }
}

export default Chatbox
