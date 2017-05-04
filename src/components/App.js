import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link
} from 'react-router-dom'

import Home from './Home'
import Chatbox from './Chatbox'
import Footer from './Footer'
import store from '../store'

class App extends Component {
  componentDidMount () {
    store.load()
  }

  render () {
    return <Router>
      <div className='App'>
        <header>
          <h1>- Vurv <i className='fa fa-comments' aria-hidden='true' /> Chat -</h1>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/chat' component={Chatbox} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  }
}

export default App
