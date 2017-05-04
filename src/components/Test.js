render () {
  if (this.state.username) {
    return <div className='App'>
      <header>
        <h1>Vurv.Chat</h1>
      </header>
      <main>
        <div className='messenger'>
          <div className='title'>
            <h3>{this.state.username} / ...and 3 others</h3>
            <div className='logout'>
              <a href='/' id='x'>&times;</a>
            </div>
          </div>
          <div className='convo' ref='convo'>
            {_.map(this.state.items, ({ username, text }, key) =>
              <div className='statement'>
                <p className='user'>@{username}:&nbsp;</p>
                <p className='chat' key={key}>{text}</p>
              </div>
            )}
          </div>
          <div className='input'>
            <div className='chatcreate'>
              <h5>{this.state.username}:&nbsp;</h5>
              <form onSubmit={this._submit}>
                <input type='text' ref='message' placeholder='message...' />
              </form>
            </div>
            <button onClick={this.delete}>clear chat</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  } else {
    return <div className='home'>
      <div>
        <p>Log In:</p>
      </div>
      <form onSubmit={this.signIn}>
        <input type='text' placeholder='username:' ref='username' />
      </form>
    </div>
  }
}




addItem (text) {
  db.ref('items').push().set({ text, username: this.state.username })
}

_submit = (event) => {
  event.preventDefault()
  const input = this.refs.message
  this.addItem(input.value)
  input.value = ''
}

signIn = (event) => {
  event.preventDefault()
  const input = this.refs.username
  this.setState({
    username: input.value
  })
  input.value = ''
}

delete () {
  db.ref('items').remove()
}
